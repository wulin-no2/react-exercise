import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CssBaseline } from "@mui/material";
import TodoList from "./TodoList";
import NavBar from "./NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <NavBar />
      {/* <h2>TODOs</h2> */}
      <TodoList />
    </>
  );
}

export default App;
