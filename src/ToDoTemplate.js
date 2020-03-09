import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoTemplate extends React.Component {
  state = {
    todoItems: [{ text: "Hi" }]
  };

  itemSubmit = event => {
    const todoTemplate = document.querySelector(".template-Container"),
      todoForm = todoTemplate.querySelector(".template-Form"),
      todoInput = todoForm.querySelector("input");

    event.preventDefault();
    todoInput.value = "";
  };

  componentDidMount() {
    const todoTemplate = document.querySelector(".template-Container"),
      todoForm = todoTemplate.querySelector(".template-Form");

    todoForm.addEventListener("submit", this.itemSubmit);
  }

  render() {
    const { todoItems } = this.state;

    return (
      <div className="template-Container">
        <form className="template-Form">
          <input type="text" placeholder="오늘의 할일" />
        </form>
        <div className="template-list">
          {todoItems.map(item => {
            return <ToDoItem text={item.text} />;
          })}
        </div>
      </div>
    );
  }
}

export default ToDoTemplate;
