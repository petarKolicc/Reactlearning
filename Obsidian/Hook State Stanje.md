### Hook State
```
let covek = "idemo andjele";
function App() {

  const [selectedTopic, setSelectedTopic] = useState("prvobitno stanje")
  // selectedTopic = trenutno stanje
  // funkcija kojom se postavlja novo stanje

  console.log(selectedTopic)
  
  function naKlik(a)
  {
    setSelectedTopic(a)
    // ovde se schedeluje izvrsavanje app komponente ponovo ali tek posto se sve zavrsi do kraja
    // ce se izvrsiti
    console.log(a)
    covek = a
  }

  return (
    <div>
      <TestKomponenta onClick={()=> {naKlik("jedan")}}></TestKomponenta>
      <TestKomponenta onClick={()=> {naKlik("dva")}}></TestKomponenta>

      {covek}
    </div>
  );
}
```
State se ne izvrsava odmah vec se schedeluje a izvrsava se kasnije



```
// Dobra praksa je menjanje state-a preko funkcije

const [selectedTopic, setSelectedTopic] = useState("prvobitno stanje")

setSelectedTopic((state) => !state)
// dozvoljava callback funkciju 
// u momentu izvrsavanja s obzirom da je schedulovano uzima
// state i stavlja ga na suprotnu vrednost
// misli se na boolean stanje

```



Ako je varijabla koja se menja objekat ili niz pravi se nova kopija kako bi ovo bilo immutable to se radi jer 
koristi spread operator za to "..."


### two way binding, bindovanje gde se koristi state da se upisana vrednost upise u promenjivu
```
export default function Player({ initalName, symbol }) {
    
    const [playerName, setPlayerName] = useState(initalName)
    const [isEditing, setIsEditing] = useState(true)
    
    function handleEditClick()
    {
        setIsEditing((editing)=> editing = !editing)
        console.log("pozvan sam")
    }
	// svaki callback ima event
    function handleChange(event){
	    // event.target.value = upisana vrednost
	    // upisanu vrednost upisujemo nazad u promenjivu i  
	    // pravimo two way binding
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing)
    {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li>
            <span className="player">
                {/* <span className="player-name">{name}</span> */}
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}
```