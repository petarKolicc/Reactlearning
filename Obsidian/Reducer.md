const[state, dispatch] = useReducer(reducer, initialArg, init?)

import { useReducer } from 'react';

reducer - funkcija koja daje specifikaciju kako se azurira stanje(state)
Uzima prethodno stanje i akaciju kao argument

initialArg - pocetno stanje moze bilti bilo kog tipa

init - initFunkcija koja vraca init stanje, ako nije specificirano
state = initialArg inace state = init(initialArg)


const[state, dispatch]

state = stanje = prvi_put = typeof init !== "undefined" ? init(initialArg) : initialArg

dispatch - funkcija koja azurira stanje i triggeruje re-rerender
dispatch se obicno sastoj
dispatch({type: "tip", payload: nekiPayload})

useReducer - ne sme da se koristi unutar petlji ili if statement-a


```
import { useReducer } from 'react';

// funkcija koja se poziva svaki put kad treba stanje da se promeni
// ona se ne poziva direktno
// vec preko dispatch funkcije
function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  else if (action.type === 'decremented_age') {
    return {
    // vraca novo stanje
      age: state.age - 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
      // ovde se poziva ali se samo salje akcija
      // stanje ce se koristiti iz prethodnog stanja
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
       <button onClick={() => {
        dispatch({ type: 'decremented_age' })
      }}>
        Decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

```