### Osnovna upotreba refa kako bi se menjao sadrzaj elemenata
```
import { useState, useRef } from 'react';
import './App.css';

function App() {

  const nekiDugmeRef = useRef()
  let [nekiTekst, postaviText] = useState("")

  function promena(event)
  {
    // postaviText(event.target.value)
  }

  function vidiKlik()
  {
    postaviText(nekiDugmeRef.current.value) 
  }

  return (
    <>
    <button onClick={vidiKlik}>Dugme</button>
    <input ref={nekiDugmeRef} onChange={promena} type="text" ></input>
    {nekiTekst}
    </>
  );
}
```

