import React from "react";
import "./ToDoItem.css";

function ToDoItem({ id, text, checked, writeDate, itemRemove, itemCheck }) {
  return (
    <div className="item-container">
      <div className="item-remove" onClick={() => itemRemove(id)}>
        ✖
      </div>
      <div className={`item-text ${checked ? "checked" : ""}`}>{text}</div>
      <div className="item-check" onClick={() => itemCheck(id)}>
        ✔
      </div>
    </div>
  );
}

export default ToDoItem;
