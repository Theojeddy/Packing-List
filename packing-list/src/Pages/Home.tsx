import React from "react";

import "../App.css";
import Checkbox from "../components/Checkbox";

interface item {
    id: number;
    name: string;
    completed: boolean;

}

export default function Home() {
    const [todos, setTodos] = React.useState<item[]>([
        {
            id: 1,
            name: "sunglasses",
            completed: false,
        },
        {
            id: 2,
            name: "maddy's glasses",
            completed: false,
        },
    ]);
    const[input, setInput] = React.useState<string>("");

    const handleToggle = (id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        }))};

    const handleClick = () => {
        if (input) {
            const newItem = {
                id: todos.length + 1,
                name: input,
                completed: false,
            };
            setTodos([...todos, newItem]);
            setInput("");
        }
    }
  return (
    <div className="main-container">
      <h1>Packing List</h1>
      <ul>
        {todos.map((todo) => (
            <li key={todo.id} onClick={ ()=> handleToggle(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</li>
            ))}
        
      </ul>
      <input type="text" placeholder="Add an item" onChange={(e) => setInput(e.currentTarget.value)} />
      <button onClick={handleClick}>Add</button>
      <Checkbox />
    </div>
  );
};
