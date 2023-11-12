import Player from "./Components/Player/Player"
import GameBoard from "./Components/GameBoard"
import Log from "./Log"

import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns)
{
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player === 'X')
  {
    currentPlayer = '0'
  }

  return currentPlayer
}

function App() {

  const[gameTurns, setGameTurns] = useState([])
  // const[activePlayer, setActivePlayer] = useState('X')
  const activePlayer = deriveActivePlayer(gameTurns)
  let winner;
  let gameBoard = [...initalGameBoard.map(array => [...array])]

  for(const turn of gameTurns)
  {
      const {square, player} = turn
      const {row, col} = square
      
      gameBoard[row][col] = player
  }

  for(const combination of WINNING_COMBINATIONS)
  {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol == secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
    {
      winner = firstSquareSymbol
    }
  }

  function handleSelectSquare(rowIndex, colIndex)
  {
    // setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      // let currentPlayer = 'X'

      // if(prevTurns.length > 0 && prevTurns[0].player === 'X')
      // {
      //   currentPlayer = 'O'
      // }
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}
      , player: currentPlayer}, ...prevTurns
      ]

      return updatedTurns
    })
  }
    
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initalName="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
          <Player isActive={activePlayer === 'O'} initalName="Player 2" symbol="O"></Player>
         
        </ol>
         <p>You won {winner}</p>
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}></GameBoard>
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
