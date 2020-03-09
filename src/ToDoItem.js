import React from "react";

function ToDoItem(props) {
  return (
    <div className="item-container">
      <div className="item-remove">✖</div>
      <div className="item-text">{props.text}</div>
      <div className="item-check">✔</div>
    </div>
  );
}

export default ToDoItem;
