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