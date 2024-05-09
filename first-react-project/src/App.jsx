import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
function App() {
  return (
    <>
      <h1>Hello! First React App!</h1>
      <Chicken />
      <Greeter person="Bill" from="Galway" />
      <Greeter person="Penny" from="Cork" />
      <Greeter person="Elena" from="Dublin" />
      <Die numSides={10} />
    </>
  );
}

export default App;
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Hello! First React App!</h1>
//       <Chicken />

//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }
