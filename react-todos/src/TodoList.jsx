import List from "@mui/material/List";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";
const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  else return data;
};

const initialTodos = [
  { id: 1, text: "walk the dog", completed: false },
  { id: 2, text: "wash the dishes", completed: false },
  { id: 3, text: "eat lunch", completed: true },
  { id: 4, text: "eat dinner", completed: false },
];
export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const removeTodo = (idx) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== idx);
    });
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 1,
      }}
    >
      <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
        {/* MyList */}
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              remove={removeTodo}
              toggle={() => toggleTodo(todo.id)}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
