import React from "react";
import Today from "./Today";
import ToDoTemplate from "./ToDoTemplate";

function App() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>My Day</h1>
        <Today />
      </header>
      <div className="toDoList">
        <ToDoTemplate />
      </div>
    </div>
  );
}

export default App;
