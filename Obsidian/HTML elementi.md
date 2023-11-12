
### dugme ukljucivanje editovanja
```
<input type="text" required defaultValue={name} />
// da je stavljao "value" umesto "defaultValue"
// ne bi moglo da se edituje dugme
```

```
<button onClick={funkcija1()} disabled={name != null} />

```
### poziv funkcije po promeni
```
function funkcijaPromene()
{
  state...
}

<input type="text" value={promenjiva1} onChange={funkcijaPromene} />
```

```
<img src="game-logo.png" alt="not available"/>
// slike unutar public foldera ne moraju da se navede folder jer je to default lokacija
```


### dinamicko ubacivanje lista
```
const initalGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard(){
    return (
        <ol id="game-board">
            // rowIndex - pokazuje index elementa
            // row - u nasem slucaju ceo red inace pojedinacan element
            {initalGameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}
```