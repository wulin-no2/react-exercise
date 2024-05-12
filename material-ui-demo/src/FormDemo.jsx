import { TextField, Slider } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";
export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(50);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateVolume = (e) => {
    setVolume(e.target.value);
  };
  return (
    <Box sx={{ border: "1px solid black", p: 2 }}>
      <p>name is: {name}</p>
      <TextField
        id="outlined-basic"
        placeholder="Fido"
        label="Puppy Name"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
      <p>volume: {volume}</p>
      <Slider aria-label="Volume" value={volume} onChange={updateVolume} />
    </Box>
  );
}
