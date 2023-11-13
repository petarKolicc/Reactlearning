import { useState, useRef } from 'react';
import './App.css';
import Popup from './Popup';
import {StrictMode} from 'react';

function App() {

  const nekiDugmeRef = useRef()
  const [timerExpired, setTimerExpired] = useState(false)
  const popupRef = useRef();
  function promena(event) {
    // postaviText(event.target.value)

  }

  function tajmer() {
    

    setTimeout(() => {
       setTimerExpired(true) 
       popupRef.current.showModal() 
      }, 1000)
  }

  // function vidiKlik() {
  //   postaviText(nekiDugmeRef.current.value)
  // }

  return (
    <StrictMode>
    <Popup referenca={popupRef}/>
      {/* <button onClick={vidiKlik}>Dugme</button>
    <input ref={nekiDugmeRef} onChange={promena} type="text" ></input>
    {nekiTekst} */}

      <button onClick={tajmer}>Dugme</button>
      {timerExpired ? "isteklo ti vreme" : ""}
      
    </StrictMode>
  );
}

export default App;
