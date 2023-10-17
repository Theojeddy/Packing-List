import React from "react";
import "../index.css";
import SubmitButton from "../components/Submitbutton";

export interface item {
  id: number;
  name: string;
  completed: boolean;
}

export default function ListItem() {
  const [input, setInput] = React.useState<string>("");
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

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed" : "incomplete"}
          >
            <label className="checkbox-label" >
              <input
                type="checkbox"
                className="checkbox-input" 
                
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              {todo.name}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add an item"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </div>
      <div>
        <SubmitButton
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}
