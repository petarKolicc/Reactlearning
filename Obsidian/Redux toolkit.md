Redux - globalnija prica od contextAPI-ja

jedan jedini store

radi po sistemu subskripcije

Componente nikad direktno na manipulisu sa skladistenjem podataka

Umesto toga koristimo reducer funkcije


reducer funkcija nije isto sto i reducer hook useReducer()   

componenta dispatch akciju, forward Reduceru onda reducer funkcija na osnovu toga menja stanje i 
na kraju updejtuje subskripcije koje update svoj ui


// reducer funkcija prima uvek dva parametra
// prethodno stanje, 


unutar redux funkcije mora biti plain javascript, nema localStorage, nema http nema nicega


// pocetno stanje se daje
const counterReducer = (state = {counter : 0}, action) => {return {new_state}}


const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
	const latestState = store.getState()
	// dobija najnovije stanje
}

store.subscribe(counterSubscriber)


store.dispatch({type:'increment',});

### Instalacija

npm install @reduxjs/toolkit
// ceo toolkit za redux











