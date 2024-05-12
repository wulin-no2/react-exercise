import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import UsernameForm from "./UsernameForm";
import SignupForm from "./SignupForm";
import BetterSignupForm from "./BetterSignupForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>State demo!</h1>
      <BetterSignupForm />
      {/* <UsernameForm />
      <br />
      <SignupForm /> */}
      {/* <Counter />
      <Dumbo /> */}
    </>
  );
}

export default App;
