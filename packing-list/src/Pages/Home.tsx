//imports
import React from "react";

// file imports
import "../App.css";
import ListItem from "../components/items";

// create function for home page
export default function Home() {

  return (
    <div className="main-container">
      <h1>Packing List</h1>
      <ListItem />
    </div>
  );
};
