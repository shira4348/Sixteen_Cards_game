import React, { useState } from "react";
import "./game_board.css";

// Empty slot structure
const createEmptySlot = () => ({
  hasCard: false,
  card: null
});

// Initialize 16 slots + 2 special slots
const initBoard = () => Array(16).fill().map(createEmptySlot);

function GameBoard() {
  const [board, setBoard] = useState(initBoard());         // 4x4 main board
  const [packCard, setPackCard] = useState(createEmptySlot());  // Card deck
  const [currCard, setCurrCard] = useState(createEmptySlot());  // Current selected

  return (
    <div className="game-container">

      {/* Top: 4x4 grid */}
      <div className="board">
        {board.map((slot, index) => (
          <div key={index} className="card">
            {slot.hasCard ? (
              <img src={`/cards/${slot.card.img}`} alt={slot.card.value} />
            ) : (
              "" // Show nothing if empty
            )}
          </div>
        ))}
      </div>

      {/* Bottom: pack and current card */}
      <div className="bottom-row">
        <div className="card">
          {packCard.hasCard ? (
            <img src={`/cards/${packCard.card.img}`} alt={packCard.card.value} />
          ) : (
            <span>pack of cards</span>
          )}
        </div>
        <div className="card">
          {currCard.hasCard ? (
            <img src={`/cards/${currCard.card.img}`} alt={currCard.card.value} />
          ) : (
            <span>curr card</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameBoard;