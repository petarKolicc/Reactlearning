import {StrictMode} from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(<StrictMode><App /> </StrictMode>);

// izvrsava svaku komandu dva puta kako bi proverili jel sve radi i jos neke druge stvari
// koje su dobre za development


clearTimeout(timer1);
// zaustavlja tajmer


// upotreba nad promenjivima

const timer = useRef();
timer.current = promenjiva1;

Reference i stanja se nece izgubiti posto react re-executuje


import {forwardRef} from 'react';

const ResultModal = forwardRef(function Komponenta1({properitiji}, ref))


})

sad kad koristis

<Komponenta1 ref={referenca1}>



{useImperativeHandle} from 'react';
// za otkrivanje API-ja, otkriva 

const dialog = useRef()

// ovo ce moci spoljne komponente da koriste
useImperativeHandle(referenca1, () => {
  return{
    apiMetoda() {
      dialog.current.showModal()
    }
  }
})

// A van toga koristis

referencaNakomponentu.current.open()
// ovo ustvari koristi dialog.current.showModal()
// a dialog je Ref vezana za nesto i otkriveno je za gore koriscenje



import {createPortal} from 'react-dom';
// teleportovanje komponente na neko drugo mesto


<div id="gdeHocuStaviti"></div>

document.getElementById('modal') 


//setanje promenjivih 

import {createContext} from 'react';

export const CartContext = createContext({polje1: []});

// ides u komponentu koja sadrzi sve komponente koje ce ovo koristiti
import {CartContext} from

<CartContext.Provider value={{polje1: []}}>
  <Komponenta2>
</CartContext.Provider>


// onda linkujes context za state


import {useContext} from 'react';
// za pristup kontextu


const promenjiva2 = useContext(CartContext)



const [stanje1, akcija1] = useReducer(funkcija1, {inicijalno stanje})
// stanje1 = trenutno
// akcija1 = koja ce biti dispatchovana negde
// funkcija1 koja ce biti izvrsena

useReducer = najnovije stanje se dobija 

