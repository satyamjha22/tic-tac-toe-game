import React from "react";
import Cell from "./Cell";
import "./index.css";
const GameBoard = ({ cells, handleClick }) => {
  return (
    <table>
      <tbody>
        <tr>
          <Cell num={0} value={cells[0]} onClick={() => handleClick(0)} />
          <Cell num={1} value={cells[1]} onClick={() => handleClick(1)} />
          <Cell num={2} value={cells[2]} onClick={() => handleClick(2)} />
        </tr>
        <tr>
          <Cell num={3} value={cells[3]} onClick={() => handleClick(3)} />
          <Cell num={4} value={cells[4]} onClick={() => handleClick(4)} />
          <Cell num={5} value={cells[5]} onClick={() => handleClick(5)} />
        </tr>
        <tr>
          <Cell num={6} value={cells[6]} onClick={() => handleClick(6)} />
          <Cell num={7} value={cells[7]} onClick={() => handleClick(7)} />
          <Cell num={8} value={cells[8]} onClick={() => handleClick(8)} />
        </tr>
      </tbody>
    </table>
  );
};

export default GameBoard;
