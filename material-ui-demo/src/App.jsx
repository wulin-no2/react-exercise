import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";

function App() {
  return (
    <>
      <FormDemo />
      <RatingDemo />
      <Button
        color="secondary"
        variant="contained"
        onClick={() => alert("hi!")}
      >
        Contained
      </Button>
    </>
  );
}

export default App;
