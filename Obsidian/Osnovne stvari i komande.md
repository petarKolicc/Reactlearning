
const entryPoint = document.getElementById("root");

ReactDOM.createRoot(entryPoint).render(<App />);
// ubacimo entry point i kazemo mu sta je root

FuncName - mora poceti velikim slovom
return mora biti rendarable vrednost


### Root div
```
function App() {

  return (
    <div>
      <main>
        <h2>Renderovan format, neki html bacen</h2>
      </main>
    </div>
  );
}

export default App;
// za exportovanje
```


### Dinamicka vrednost unutar html
```
// dinamicka vrednost unutar
const idemo_andjele = "covek ide vodu nosi"

  

function TestKomponenta() {
  return (
    <div>Tucine dobar dan    
      {idemo_andjele}
    </div>
  )
}
```

### Uvozenje slike
```

import img1 from './assets/slika1.png';
function TestKomponenta() {
  return (
    <div>      
      <img src={img1} alt="nesto ne radi"/>
    </div>
  )
}

// ne sme direktno jer ce se pri kompajliranju koda ovo zeznuti

```


### Ugradnja u komponentu vrednosti

```
// opcija1
function TestKomponenta(property) {
  return (
    <div>      
      {property.ime1}
    </div>
  )
}
// opcija2
function TestKomponenta({ime1, ime2}) {
  return (
    <div>      
      {ime1}
    </div>
  )
}

function App() {
  return (
    <div>
      <TestKomponenta ime1="vrednost1" ime2="vrednost2"/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
  ```

### Spread operator desemblerovanje objekta na polja 
```
const variable1 = {   prop1: 'value1',   prop2: 'value2',   prop3: 'value3' };

// vadjenje objekata pomocu ovog spread operatora
<Component1 {...variable1} />
// ekvivalent je
`<Component1 prop1="value1" prop2="value2" prop3="value3" />`
```

### Children 
```
export default function TestKomponenta(property) {
    return (
      <div>
        <div>Ko te ima</div>
        <div>      
            {property.children}
        </div>
        <div>
            Taj te nema
        </div>
      </div>
    )
  }

<TestKomponenta>man in the middle</TestKomponenta>
// umesto man in the middle moze i neki text
      
```


```
export default function TestKomponenta(property) {

    function handleClick() {
        console.log('sta god')
    }

    return (
        <div>
            <button onClick={handleClick}></button>
        </div>
    )
}
```


### Exteran unos funkcije unutar komponente
```
<div>
      <TestKomponenta onClick={naKlik}></TestKomponenta>
 </div>

export default function TestKomponenta({onClick}) {

    function handleClick() {
        console.log('sta god')
    }

    return (
        <div>
            <button onClick={onClick}></button>
        </div>
    )
}
```


### Exteran unos funkcije unutar komponente sa parametrima
```
function App() {

  function naKlik(a)
  {
    console.log(a)
  }

  return (
    <div>
      <TestKomponenta onClick={()=> {naKlik("jedan")}}></TestKomponenta>
      <TestKomponenta onClick={()=> {naKlik("dva")}}></TestKomponenta>
      // ne sme komponenta direktno da se unese pa se unosi preko anonimne funkcije
    </div>
  );
}
```

### Menjanje komponenti

mora i use state da se koristi uz ovo
```
{varijabla1 === "stagod" ? <div>ovaj text se prikazuje</div> : null}
// prva opcija

{varijabla1 === "stagod" && (<div>ovaj text se prikazuje</div>)}
// druga cistija opcija
```


### Dinamican prikaz komandi
```
<Komponenta {...niz[0]} />
<Komponenta {...niz[1]} />
<Komponenta {...niz[2]} />
<Komponenta {...niz[3]} />

//Umesto ovoga moze

niz.map((item) => <Komponenta {...Item})
```

### map
```
niz.map((object, index)) => <li key={index}> {object.text} </li>
```


### idijevi ili ClassName nisu forwardovani kroz sekcije vec mora na ovaj nacin
```
<Komponenta1 ClassName="klasa1" id="id1"/>`
export default function Komponenta1({polje1, children...props})
{
return (
  // prenos props sto znaci sve sto bude bilo ubaceno osim polje1 i children bice preneto
  // ovde nam najcesce treba id i ClassName
  <section {...props}>
  </section>
)
}
``
```


### Fragmenti 
```
import Fragment from 'react';

// ne zelim da imam wrapper div u return metodi
<Fragment>
</Fragment>

novija verzija je bez icega i nema uvoza import Fragment
<>
</>
```

### prenos kroz komponente htmla
```
polje3 = (<><div>covek negde</div>
<div>ide</div> </>)

export default function TestKomponenta({polje3, poljeKomponenta}) {


    return (
        <div>
            polje3
            // ovo je html
        </div>
    )
}

<TestKomponenta polje3={polje3} poljeKomponenta="div"></TestKomponenta>

```


### Ugradnja html i drugih div ili nekih drugih komponenti unutar child komponenti

```
import TestKomponenta from '../../Components/TestKomponenta/TestKompnenta';

function App() {
  
  let htmlPolje = 
  (<>    <div>ima</div>
    <div>nesto</div>
    </>

  )

  return (
    <TestKomponenta polje1={htmlPolje } polje2="menu"></TestKomponenta>  
  );
}

// ugradnja sa podrazumevanom vrednoscu
export default function TestKomponenta({ polje1, polje2 = 'menu' }) {

    // let Komponenta1 = polje1
    let Komponenta2 = polje2

    return (
        <>
		    // custom komponenta    
	          {polje1}

			// native komponenta menu u ovom slucaju moze i npr. div biti
            <Komponenta2>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </Komponenta2>
        </>
    )
}
```

### Matrica html elementi
```
  const matrica = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
  ];

  return (
  <ol>
    {matrica.map((niz, indexNiza) => (
      <li key={indexNiza} style={{ display: 'flex', flexDirection: 'row', padding: 0, margin: 0, listStyleType: 'none'}}>
        <ol>
          {niz.map((element, elemID) => (
            <li key={elemID}>
              {element}
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>
  )

```