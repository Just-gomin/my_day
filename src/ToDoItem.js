import React from "react";

function ToDoItem({ id, text, checked, writeDate, itemRemove }) {
  return (
    <div className="item-container">
      <div className="item-remove" onClick={() => itemRemove(id)}>
        ✖
      </div>
      <div className="item-text">{text}</div>
      <div className="item-check">✔</div>
    </div>
  );
}

export default ToDoItem;
