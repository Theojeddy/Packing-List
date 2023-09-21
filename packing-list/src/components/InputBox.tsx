import React from "react";

interface InputBoxProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}
export default function InputBox({input , setInput}: InputBoxProps) {
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Add an item"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
    </div>
  );
}
