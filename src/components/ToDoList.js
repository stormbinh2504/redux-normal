import React, { Component } from "react";
import TodoItem from "./TodoItem";

class ToDoList extends Component {
  constructor(props) {
    var retrievedObject = localStorage.getItem("TODO");
    super(props);
    this.state = {
      todos: JSON.parse(retrievedObject),
      color: "red",
    };
    // localStorage.setItem(
    //   "myCat",
    //   JSON.stringify([
    //     {
    //       id: 1,
    //       name: "bình",
    //       status: true,
    //     },
    //     {
    //       id: 2,
    //       name: "bìnah",
    //       status: true,
    //     },
    //     {
    //       id: 3,
    //       name: "bìnbbh",
    //       status: true,
    //     },
    //   ])
    // );
  }

  onChangeColor = (color) => {
    this.setState({ color: color });
  };

  handelDelete = (todo) => {
    var index = this.state.todos.findIndex((item, index) => {
      if (item.id == todo.id) {
        return todo.id;
      }
    });
    console.log(index);
    if (index >= 0) {
      this.setState({ todos: this.state.todos.splice(index, 1) });
      console.log(this.state.todos);
      //   localStorage.setItem("TODO", JSON.stringify(this.state.todos));
    }
  };

  render() {
    return (
      <div className="container">
        <TodoItem
          todos={this.state.todos}
          handelDelete={this.hadelDelete}
          color={this.state.color}
          onChangeColor={this.onChangeColor}
        ></TodoItem>
      </div>
    );
  }
}

export default ToDoList;
