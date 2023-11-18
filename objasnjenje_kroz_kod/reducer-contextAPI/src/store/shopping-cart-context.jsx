import { createContext } from "react";


// mora veliko slovo
// parametar je parametar za context inicijalan
// vrednosti contexta se moze pristupiti ali contextu
// ne njega pravi react
export const CartContext = createContext({items: []})