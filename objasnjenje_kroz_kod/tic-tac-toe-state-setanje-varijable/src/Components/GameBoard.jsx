import { useState } from "react";




export default function GameBoard({onSelectSquare, board})
{
    // let gameBoard = initalGameBoard;


    // const updatedTurns = [
    //     {square: {row: rowIndex, col: colIndex}
    //   , player: currentPlayer}
    //   ]



    // const[gameBoard, setGameBoard] = useState(initalGameBoard);

    // function handleSelectSquare(rowIndex, colIndex)
    // {
    //     setGameBoard((prevGameBoard) => {
    //         console.log(prevGameBoard)

    //         let updatedBoard = [...prevGameBoard.map((row) => [...row])]
    //         updatedBoard[rowIndex][colIndex] = activePlayer 

    //         return updatedBoard;
    //     });

    //     onSelectedSquare()
    //     // aktiviranje menjanja stanja
    //     // e sad samim tim da je ovo referenca funkcije od gore
    //     // gore ce se sve aktivirati i onda ce 
    //     // sva deca komponente biti obnovljena
    // }
    return (
        <ol id="game-board">
            {/* // rowIndex - pokazuje index elementa
            // row - u nasem slucaju ceo red inace pojedinacan element */}
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=> onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}