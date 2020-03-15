import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoTemplate.css";

class ToDoTemplate extends React.Component {
  toDoList = [];

  constructor(props) {
    super(props);
    this.toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
    // localStorage에서 toDoList라는 이름의 데이터를 가져오되, 존재하지 않을 시에는 빈 배열을 반환 합니다.
    this.state = {
      todoItems: this.toDoList
    };
  }

  // List의 Items를 지우거나 추가할 때 LocalStorage와 State를 변경해주기위한 함수
  saveToDos = () => {
    localStorage.setItem("toDoList", JSON.stringify(this.toDoList));
    this.setState({ todoItems: this.toDoList });
  };

  // form에서 toDoItem을 입력 후 제출하는 이벤트에 대한 함수
  itemSubmit = event => {
    const todoTemplate = document.querySelector(".template-Container"),
      todoForm = todoTemplate.querySelector(".template-Form"),
      todoInput = todoForm.querySelector("input");

    const date = new Date(),
      dateCode =
        date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
    const newID =
      date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();

    const toDoObj = {
      id: newID,
      text: todoInput.value,
      checked: false,
      writeDate: dateCode
    };

    this.toDoList.push(toDoObj);

    this.saveToDos();

    event.preventDefault();
    todoInput.value = "";
  };

  itemRemove = id => {
    const cleanToDoList = this.toDoList.filter(function(toDo) {
      return toDo.id !== id;
    });
    this.toDoList = cleanToDoList;
    this.saveToDos();
  };

  itemCheck = id => {};

  // render가 진행된 뒤에 eventListner를 추가
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
          <input
            type="text"
            placeholder="오늘의 할일"
            onFocus={e => (e.target.placeholder = "")}
            onBlur={e => (e.target.placeholder = "오늘의 할일")}
          />
        </form>
        <div className="template-list">
          {todoItems.map(item => {
            return (
              <ToDoItem
                id={item.id}
                text={item.text}
                checked={item.checked}
                writeDate={item.writeDate}
                itemRemove={this.itemRemove}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDoTemplate;
