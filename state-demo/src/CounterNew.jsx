import { useState, useEffect } from "react";
export default function CounterNew() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  useEffect(
    function myEffect() {
      console.log("my effect was called!");
    },
    [name]
  );
  const increment = () => {
    setCount((e) => e + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <p>name: {name}</p>
      <input value={name} onChange={handleChange} type="text"></input>
    </div>
  );
}
