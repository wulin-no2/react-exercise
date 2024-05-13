import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import { Create } from "@mui/icons-material";
import { useState } from "react";
export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <ListItem onSubmit={handleSubmit}>
      <form>
        <TextField
          id="outlined-basic"
          label="New Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}

{
  /* <OutlinedInput
  id="outlined-adornment-password"
  type={showPassword ? "text" : "password"}
  label="Password"
/>; */
}
