contextAPI - vezi za stanje najblizeg predaka koje svi koriste


```
import { createContext } from "react";


// mora veliko slovo
// parametar je parametar za context inicijalan
// vrednosti contexta se moze pristupiti ali contextu objektu
// ne njega pravi react
export const CartContext = createContext({items: []})
```


Mala aplikacija koja manje i cita kontext, mora da se koristi sa stateom kako bi se azurirao adektvatno UI
```

//////////////////////
// context komponenta
import { createContext } from "react";
import { useState } from 'react';


// mora veliko slovo
// parametar je parametar za context inicijalan
// vrednosti contexta se moze pristupiti ali contextu
// ne njega pravi react
export const DummyContext = createContext({value: "",
    newValue: () => {} })



    // wrappujemo sve i koristimo children property
    export default function DummyContextProvider({children})
    {

        // vezujemo context za state kako bi mogli lako da azuriramo vrednost
        // i komunikacija sa UI
        const [value, newValue] = useState("ima nesto")

        const ctxValue = {
          value: value,
        newValue: newValue
        }

        return (
            // stavljamo wrapper oko svih funkcija
            // koristimo provider context ovde
            <DummyContext.Provider value = {ctxValue}>
              {children}
            </DummyContext.Provider>
          );
    }
//////////////////////////////
// App komponenta

import DummyContextProvider from './Store/dummy-conext';

function App() {
  return (
    // stavljamo wrapper oko svih funkcija
    // koristimo provider context ovde
    <DummyContextProvider>
      <ComponentA />
      <ComponentC />
    </DummyContextProvider>
  );
}

//////////////////////////////////////////
// Komponenta koja cita vrednost

import { DummyContext } from "../Store/dummy-conext"
import { useContext } from "react"

export default function ComponentB() {

	// citanje kontexta, uvek cita najazurniju vrednost
    let {value} = useContext(DummyContext)

    return (<>
    <h1>Komponenta B</h1>
    <p>{value}</p>
    </>)
}

//////////////////////////////////////////
Komponenta koja menja vrednost

import { useState, useRef, forwardRef, createContext } from "react"
import { DummyContext } from "../Store/dummy-conext";
import { useContext } from "react";



export default function ComponentD() {
    const { value, newValue } = useContext(DummyContext)

    function saveNumber() {
        console.log(value)
        newValue(valueRef.current.value)
    }
    // const [value, newValue] = useState("")
    const valueRef = useRef()
    return (
        <>
            <h1>Komponenta D</h1>
            <p>some textD</p>
            <input ref={valueRef} type="text" />
            <button onClick={saveNumber}>Dugme</button>
            <p>{value}</p>
        </>
    )
}
```