import React, { useEffect, useState } from "react";
import "./index.css";
import GameBoard from "./GameBoard";
import GameStatus from "./GameStatus";

// Define a functional component called TicTacToe
export default function TicTacToe() {
  // State variables to track game status
  const [turnPlay, setTurnPlay] = useState("x"); // Tracks the current player's turn
  const [cells, setCells] = useState(Array(9).fill("")); // Represents the game board cells
  const [winner, setWinner] = useState(null); // Tracks the winner of the game
  const [isDraw, setIsDraw] = useState(false); // Indicates if the game is a draw

  // Function to check for a winner based on the game board
  const checkForWinner = (squares) => {
    // Define winning combinations
    let combos = {
      accross: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    // Loop through the winning combinations and check for a winner
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" &&
          squares[pattern[1]] === "" &&
          squares[pattern[2]] === ""
        )
          // If no winner in this combination, continue checking
          return false;
        else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          // Set the winner and return true
          setWinner(squares[pattern[0]]);
          return true;
        }
      });
    }
    // No winner found
    return false;
  };

  // Function to handle a cell click
  const handleClick = (num) => {
    if (winner) {
      // If there is already a winner, do nothing
      return;
    }

    if (cells[num] !== "") {
      // If the cell is already occupied, show an alert and do nothing
      alert("already played");
      return;
    }
    // Update the game board and player's turn
    setCells(cells.map((cell, index) => (index === num ? turnPlay : cell)));
    setTurnPlay(turnPlay === "x" ? "o" : "x");
  };
  // Function to restart the game
  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
    setTurnPlay("x");
    setIsDraw(false);
  };
  // useEffect to check for a winner whenever the cells array changes
  useEffect(() => {
    checkForWinner(cells);
  }, [cells]);
  // useEffect to determine if the game is a draw
  useEffect(() => {
    if (winner) {
      setIsDraw(false);
    } else if (cells.every((cell) => cell !== "")) {
      setIsDraw(true);
    }
  }, [cells, winner]);

  return (
    <div className="container">
      <GameStatus
        turnPlay={turnPlay}
        isDraw={isDraw}
        winner={winner}
        handleRestart={handleRestart}
      />
      <GameBoard cells={cells} handleClick={handleClick} />
    </div>
  );
}
