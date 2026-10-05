import Blocks from "./components/Blocks"
import "./App.css"
import generateNumbers, { countBingoLines } from "./utils"
import { useState } from "react"

export default function App() {

  const [board, setBoard] = useState(generateNumbers())
  const { won } = countBingoLines(board)
  //countBingoLines return 2 values won and linesCount

  function selectBlock(id) {
    setBoard(prevBoard => prevBoard.map(block =>
      block.id === id ? { ...block, marked: !block.marked } : block
    ))
  }

  return (
    <main className="main-component">
      <h1>Bingo Game</h1>
      {won ? <p>You Won </p> : <p>First One to cross 5 lines win!</p>}
      <div className="bingo-block">
        {board.map(block => (
          <Blocks key={block.id} value={block.value} marked={block.marked} onClick={() => selectBlock(block.id)} />
        ))}
      </div>
      <button className="new-game-btn" onClick={() => setBoard(generateNumbers())}>New Game</button>

    </main>
  )
}