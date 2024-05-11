// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import PropertyList from "./PropertyList";
import Rating from "./Rating";
import Name from "./Name";
import Price from "./Price";
import PropertyListItem from "./PropertyListItem";
const properties = [
  { id: 120931, name: "Jam Kerry", rating: 4.9, price: 150 },
  { id: 120932, name: "Toby Jam", rating: 4.75, price: 250 },
  { id: 120933, name: "Barry Young", rating: 4.9, price: 350 },
  { id: 120934, name: "Cob Bean", rating: 4.9, price: 100 },
  { id: 120935, name: "Ice Cream", rating: 4.9, price: 400 },
  { id: 120936, name: "Big Head", rating: 4.9, price: 600 },
];
function App() {
  return (
    <div>
      <h1>Hello! First React App!</h1>
      {/* <Rating rating={5.0} />
      <Price price={125} />
      <Name name="Tom Jerry" />
      <PropertyListItem name="Big Head" rating={4.5} price={100} />
      <Chicken />
      <Greeter person="Bill" from="Galway" />
      <Greeter person="Penny" from="Cork" />
      <Greeter person="Elena" from="Dublin" />
      <Die numSides={10} /> */}

      <PropertyList items={properties} />
    </div>
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
