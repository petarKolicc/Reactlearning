import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X"></Player>
          <Player name="Player 2" symbol="O"></Player>
          
        </ol>
        <GameBoard></GameBoard>
      </div>
    </main>
  )
}

export default App
