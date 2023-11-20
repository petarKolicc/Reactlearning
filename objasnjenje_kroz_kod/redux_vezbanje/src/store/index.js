import { createStore } from "redux";
import {createSlice, configureStore} from '@reduxjs/toolkit'
import counter from "./counter";
import auth from "./auth";



const store = configureStore({
    // ovako inace da imamo grupu reducera
    // reducer:{ counter: counterSlice.reducer}
    // reducer: counterSlice.reducer
    reducer: {
        counter: counter,
        auth: auth
    }
})

// const counterReducer = (state = initialState, action) =>
// {
//     if(action.type === 'increment')
//     {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     else if(action.type === 'decrement')
//     {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter

//         }
//     }
//     else if(action.type === 'increase')
//     {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter

//         }
//     }
//     else if(action.type === 'toggle')
//     {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter

//         }
//     }

//     else return state
// }

// const store = createStore(counterReducer);


export default store;