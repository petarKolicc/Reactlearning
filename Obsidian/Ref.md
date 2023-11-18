### Osnovna upotreba refa kako bi se menjao sadrzaj elemenata
```
import { useState, useRef } from 'react';
import './App.css';

function App() {

  const nekiDugmeRef = useRef()
  let [nekiTekst, postaviText] = useState("")

  function vidiKlik()
  {
    postaviText(nekiDugmeRef.current.value) 
  }
    function kliknutoDugmeObrisi()
  {
    ime1.current.value = ""
    // moze i ovako ali nije dobro menjati DOM licno
    // ova promena odmah nastaje i uvek sadrzi trenutnu vrednost
  }

  return (
    <>
    <button onClick={vidiKlik}>Dugme</button>
    <button onClick={kliknutoDugmeObrisi}>Obrisi</button>
    <input ref={nekiDugmeRef} onChange={promena} type="text" ></input>
    {nekiTekst}
    </>
  );
}
```


Posto se ref promeni komponenta se ne reexecutuje iako je vrednost elementa njenog sada promenjena

State se koristi kada se menja komponenta ciji sadrzaj treba da bude odmah prikazan na UI a inace ref u pozadini menjas, ako ne ide na UI ne koristi state vec Ref



 const timer = useRef();

```
	const timer = useRef();
    function startTimer()
    {
        timer.current = setTimeout(() => {
            setTimerExpired(true) 
         }, targetTime * 1000);

        setTimerRunning(true)

    }

   function stopTimer()
    {
        clearTimeout(timer.current)
        setTimerRunning(false)
    }
```   

Upotreba refa

```
import { forwardRef } from "react"


const ResultModal = forwardRef( function ResultModal({result, targetTime}, ref) 
{
    return (
        <dialog ref={ref} open>
            <p>
                The target time was {targetTime} 
            </p>
            <p>
                You stopped the time with X seconds left
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})


export default ResultModal


// druga komponenta
<ResultModal ref={dialog} targetTime={targetTime} result="lost"></ResultModal>
```
//  forwardRefa







```
import { forwardRef } from "react"
import { useImperativeHandle } from "react"
import { useRef } from "react"

const ResultModal = forwardRef( function ResultModal({result, targetTime}, ref) 
{
    dialog = useRef();
    // mora forwardRef mora ref kao prvi parametar
    // drugi parametar
    useImperativeHandle(ref, () =>{
        odnesi()
        {
            dialog.current.open()
        }
    })

    return (
        <dialog ref={dialog} open>
            <p>
                The target time was {targetTime} 
            </p>
            <p>
                You stopped the time with X seconds left
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})


export default ResultModal


// druga komponenta

dialog.current.odnesi()

{<ResultModal ref={dialog} targetTime={targetTime} result="lost"></ResultModal>}




```
// expose API-ja koje pomocu refa moze da koristi dalje komponenta na gore
// znaci samo te exposovane funkcije smeju se koriste