// import { useState, useRef } from 'react';
import './App.css';
// import Popup from './Popup';
// import {StrictMode} from 'react';
import Tajmer from './Tajmer';


function App() {

  // const [vrednost, vrednostStanje] = useState("")
  // const ime1 = useRef()
  // mogu da se nakace na jx elemente
  // i ima samo current property 
  // ime1.current - vrednost se skladisti, moze se pristupiti
  // svim vrednostima i metodama koje daje objekat sto se na netu


  // function kliknutoDugmeNapisi()
  // {
  //   vrednostStanje(ime1.current.value)
  // }
  // function kliknutoDugmeObrisi()
  // {
  //   ime1.current.value = ""
  //   // moze i ovako ali nije dobro menjati DOM licno
  //   // ova promena odmah nastaje i uvek sadrzi trenutnu vrednost
  // }

  return (
    <>
      <Tajmer title="Easy" targetTime={1}></Tajmer>
      <Tajmer title="Not easy" targetTime={5}></Tajmer>
      <Tajmer title="Getting tough" targetTime={10}></Tajmer>
      <Tajmer title="Pros only" targetTime={15}></Tajmer>
    </>
  )

  // const nekiDugmeRef = useRef()
  // const [timerExpired, setTimerExpired] = useState(false)
  // const popupRef = useRef();
  // function promena(event) {
  //   // postaviText(event.target.value)

  // }

  // function tajmer() {


  //   setTimeout(() => {
  //      setTimerExpired(true) 
  //      popupRef.current.showModal() 
  //     }, 1000)
  // }

  // function vidiKlik() {
  //   postaviText(nekiDugmeRef.current.value)
  // }

  // return (
  //   <StrictMode>
  //   <Popup referenca={popupRef}/>
  //     {/* <button onClick={vidiKlik}>Dugme</button>
  //   <input ref={nekiDugmeRef} onChange={promena} type="text" ></input>
  //   {nekiTekst} */}

  //     <button onClick={tajmer}>Dugme</button>
  //     {timerExpired ? "isteklo ti vreme" : ""}

  //   </StrictMode>
  // );
}

export default App;
