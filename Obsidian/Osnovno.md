ReactDOM.render(<h1>Hello, everyone </h1>, document.getElementById("divid1"))
// upisujemo html ovaj na mesto gde se nalazi divid1
//ReactDOM - globalna varijabla
// render - je njena metoda

`ReactDOM.render(<h1>Turcine popusis mi kurcine!</h1>, document.getElementById("divmesto"))`

```
function MojaKomponenta(){ 
	return(
			<div> Moja komponenta </div>
		)
		// vazno da return mora da ima svoj wrapper div ili sta god njega i unutar njega sve strpati
}
```


`ReactDOM.render(<MojaKomponenta/>, document.getElementById("divid1"))
// ugradjuje moju komponentu unutar Diva


JSX - Javascript XML

// pisan html u javascript

// className == class ali na React nacin
const element = <h1 className="header"> This is JSX </h1>
console.log(element) // react pravi javascript objekat
ReactDOM.render(element, document.getElementById("root"))


import React from "react"
import ReactDOM from "react-dom"
// ovako uvozim react, ne mora sa novijim verzijama od React 17


React = Declarative UI Programming
// samo pisem sta treba ne kako se to i radi



package.json

"react-scripts": "5.0.1"
// iza scene trasnformisu kod i minifikuju ga

