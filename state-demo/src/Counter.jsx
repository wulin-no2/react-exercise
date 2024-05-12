import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const addThree = () => {
    setCount(count + 3);
  };
  return (
    <div>
      <p>count number: {count}</p>
      <button onClick={incrementCount}>+1</button>
      <button onClick={addThree}>+3</button>
    </div>
  );
}
