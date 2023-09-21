// imports
import React from "react";
import "../App.css";
import SubmitButton from "../components/Submitbutton";

// define the item, id, name, completed
export interface item {
  id: number;
  name: string;
  completed: boolean;
}
// create list item function
export default function ListItem() {
 // set states for inputs
  const [input, setInput] = React.useState<string>("");
  // set state for todos
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
console.log(todos)
  // toggle function to switch between completed and incomplete
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
            onClick={() => handleToggle(todo.id)}
            className={todo.completed ? "completed" : "incomplete"}
            // when completed have a line through
            // when incomplete have no line through
          >
            {todo.name}
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
