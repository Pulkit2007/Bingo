import Blocks from "./components/Blocks"
import "./App.css"
import generateNumbers, {
  countBingoLines,
  generateRandomNumber,
  resetRandomNumbers,
} from "./utils"
import { useState } from "react"

export default function App() {

  const [game, setGame] = useState(() => {
    resetRandomNumbers()
    const number = generateRandomNumber()
    const board = generateNumbers().map(block =>
      block.value === number ? { ...block, marked: true } : block
    )

    return { board, number, drawnCount: 1 }
  })
  const { board, number, drawnCount } = game
  const { won } = countBingoLines(board)

  function drawNumber() {
    if (drawnCount === 25 || won) {
      return
    }

    const nextNumber = generateRandomNumber()
    setGame(prevGame => ({
      number: nextNumber,
      drawnCount: prevGame.drawnCount + 1,
      board: prevGame.board.map(block =>
        block.value === nextNumber ? { ...block, marked: true } : block
      ),
    }))
  }

  function startNewGame() {
    resetRandomNumbers()
    const nextNumber = generateRandomNumber()
    setGame({
      number: nextNumber,
      drawnCount: 1,
      board: generateNumbers().map(block =>
        block.value === nextNumber ? { ...block, marked: true } : block
      ),
    })
  }

  return (
    <main className="main-component">
      <header className="game-header">
        <p className="eyebrow">Lucky little chaos machine</p>
        <h1>BINGO<span>!</span></h1>
        <p className="game-instructions">
          Tap a square, chase the lines, make a little noise.
        </p>
      </header>
      <section className="draw-panel" aria-live="polite">
        <span className="draw-label">Number called</span>
        <strong className="draw-number">{number}</strong>
      </section>
      <p className={won ? "win-message" : "game-status"}>
        {won ? "YOU WON. ICONIC." : "Mark the called square, then draw again!"}
      </p>
      <div className="bingo-block">
        {board.map(block => (
          <Blocks key={block.id} value={block.value} marked={block.marked} />
        ))}
      </div>
      <div className="game-actions">
        <button className="draw-btn" onClick={drawNumber} disabled={drawnCount === 25 || won}>
          {drawnCount === 25 ? "All numbers called" : "Draw number"}
        </button>
        <button className="new-game-btn" onClick={startNewGame}>
          New game
        </button>
      </div>
    </main>
  )
}