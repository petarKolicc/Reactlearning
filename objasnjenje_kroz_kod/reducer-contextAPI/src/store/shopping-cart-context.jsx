import { createContext } from "react";


// mora veliko slovo
// parametar je parametar za context inicijalan
// vrednosti contexta se moze pristupiti ali contextu
// ne njega pravi react
export const CartContext = createContext({items: [],
    addItemToCart: () => {} })


export default function DummyContextProvider({children})
{
    return (
        // stavljamo wrapper oko svih funkcija
        // koristimo provider context ovde
        <DummyContext.Provider value = {ctxValue}>
          {children>}
        </DummyContext.Provider>
      );
}