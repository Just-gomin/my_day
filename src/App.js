import React from "react";
import Today from "./Today";
import ToDoTemplate from "./ToDoTemplate";
import "./App.css";

function App() {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <span className="page-title">My Day</span>
      </div>
      <div className="page-container">
        <div className="page-sideBar">
          <div className="sideBar-category">
            <div className="sideBar-header">ToDoList</div>
            <div className="sideBar-header">Memo</div>
          </div>
          <div className="sideBar-days">
            <Today />
          </div>
        </div>
        <div className="toDoList">
          <ToDoTemplate />
        </div>
      </div>
    </div>
  );
}

export default App;
