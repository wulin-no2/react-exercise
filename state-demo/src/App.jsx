import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import UsernameForm from "./UsernameForm";
import SignupForm from "./SignupForm";
import BetterSignupForm from "./BetterSignupForm";
import ShoppingListForm from "./ShoppingListForm";
import ShoppingList from "./ShoppingList";
import CounterNew from "./CounterNew";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterNew />
      <ShoppingList />
    </>
  );
}

export default App;
