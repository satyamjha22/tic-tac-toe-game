import React from "react";
import "./index.css";
const GameStatus = ({ turnPlay, isDraw, winner, handleRestart }) => {
  return (
    <div className="game-status">
      <caption>Turn : {turnPlay}</caption>
      {isDraw ? (
        <>
          <h1>Draw!</h1> <button onClick={handleRestart}>Restart Game</button>
        </>
      ) : winner ? (
        <>
          <h1>{winner} is the winner</h1>{" "}
          <button onClick={handleRestart}>Restart Game</button>
        </>
      ) : null}
    </div>
  );
};

export default GameStatus;
