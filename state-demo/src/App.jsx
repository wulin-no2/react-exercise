import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>State demo!</h1>
      <Counter />
    </>
  );
}

export default App;
