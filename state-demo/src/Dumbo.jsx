import { useState } from "react";
import { v4 as uuid } from "uuid";

function generateGameBoard() {
  console.log("initial fame board!");
  return Array(5000);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);
  return (
    <button onClick={() => setBoard("hello")}>click me to change state</button>
  );
}
