//imports
import React from "react";
// file imports
import '../App.css'

// defining prop types
interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  todos: any;
  setTodos: React.Dispatch<React.SetStateAction<any>>;
}

// function for submit button
export default function SubmitButton({ input, setInput, todos, setTodos}: Props) {
  
  // take inputs to create a new item
  // add the item to the list
  // clears the input field
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
  };


  return (
    <div className="App">
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
