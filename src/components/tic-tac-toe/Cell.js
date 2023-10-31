import React from "react";
import "./index.css";
const Cell = ({ num, value, onClick }) => {
  return <td onClick={onClick}>{value}</td>;
};

export default Cell;
