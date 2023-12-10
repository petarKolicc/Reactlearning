Redux - globalnija prica od contextAPI-ja

jedan jedini store

radi po sistemu subskripcije

![[Pasted image 20231203190216.png]]

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

npm install redux react-redux
// instalacija reduxa





#### ### Obican redux koji necu primenjivati i koji nije 

```
// import biblioteke
const redux = require('redux');

// novi redux
const store = redux.createStore();

// ova funkcija se izvrsava posto se dispatch pozove
const counterReducer = (state={counter: 0}, action) => {

  if(action.type === 'increment')
  {
    return {
      counter: state.counter + 1
    };
  }
  else if(action.type === 'decrement')
  {
    return {
      counter: state.counter - 1
    };
  }

  return state
};


consts store = redux.createStore(counterReducer);

// funkcija stanja koja se poziva posto dodje do izmene stanja
const counterSubscriber = () => {
  const latestState = store.getState()
}


// funkcija koja ce se izvrsiti kad god se stanje promeni
store.subscribe(counterSubscriber);


// funkcija koju mi pozivamo
store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})

```



### Klasican pristup

store/index.js

```
// store/index.js

import {createStore} from 'redux';

const initialState = {counter: 0, showCounter: true}

const counterReducer = (state = initialState, action) => {
	if(action.type === 'increment')
	{
		return {
			counter: state.counter + 1
			showCounter: state.showCounter
		}
	}
	if(action.type === 'decrement')
	{
		return {
			counter: state.counter + 1
			// sve mora ponovo da se ubaci
			// iako se nista ne menja ovde
			// radi override umesto merge
			// ali uvek vracaj ovako nemoj da menjas postojece stanje
			
			showCounter: state.showCounter
		}
	}

}

const store = createStore(counterReducer)

export default store;

```

```
// index.js
import {Provider} from 'react-redux'
import store from './store/index';

// samo wrappovani delovi imaju redux
root.render(<Provider>
				<App />
			</Provider>)


```

```
//Counter.js

import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'


const Counter = () => {
	
	// koji deo informacije vadimo iz store i koji cemo
	// koristiti u ovoj komponenti i upisuje to u ovu vrednost
	// cim se promeni vrednost stanja i counter ce se promeniti 
	// i izvrsice da ase ponovo izvrsi cela komponedodje do promene
	const counter = useSelector(state => state.counter);

	const dispatch = useDispatch();
	dispatch({ type:'akcija1', payload: {stagod}})
	// akcijaKojaSeIzvrsi

}
```



### Redux toolkit

##### Instaliranje



npm install @reduxjs/toolkit
// ceo toolkit za redux

```
// Glavni deo store
// store/index.js

import counter from "./counter";
import auth from "./auth";
// izdeljen redux



const store = configureStore({
    // ovako inace da imamo grupu reducera
    // reducer:{ counter: counterSlice.reducer}
    // reducer: counterSlice.reducer
    // konfiguracija
    reducer: {
        counter: counter,
        auth: auth
    }
})

```



```
// store/counter.js

// jedno podstanje
import {createSlice} from '@reduxjs/toolkit'


const initialCounterState = {counter: 0, showCounter : true}

const counterSlice = createSlice({
name: 'counter', 
initialState: initialCounterState,
reducers: {
    increment(state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    increase(state, action) {
        state.counter = state.counter + action.amount
    },
    toggleCounter(state) {
        state.showCounter = !state.showCounter
    }
}})


export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

```



```
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../store/counter";

const Counter = () => {

  const dispatch = useDispatch()

  // vadi samo deo stanja koji mi koristimo
  // automatski pravi supskripciju za ovu komponentu i dobija automatski
  // najnoviju verziju counter-a
  const counter = useSelector(state => state.counter.counter)
  const toggler = useSelector(state => state.counter.trueshowCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase({amount: 5}) );
  }
  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter() );
  }

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggler === true && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={toggleHandler}>Toggle</button>


      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

```



# Redux i useEffect()

Svaki put kad se promenjiva promeni izvrsice se useEffect
```

promenjiva1 = useSelector((state)=> state.promenjiva1)

useEffect(() => {
REST_Zahtev(promenjiva1)
}, promenjiva1)

```


