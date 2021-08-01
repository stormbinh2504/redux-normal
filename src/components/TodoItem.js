import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rdcolor: ["blue", "deeppink", "aqua"],
    };
  }

  Ondelete = (todo) => {
    var { hadelDelete } = this.props;
    hadelDelete(todo);
  };

  ChangeColor = (color) => {
    var { onChangeColor } = this.props;
    onChangeColor(color);
  };

  render() {
    var { todos, color } = this.props;
    return (
      <div
        onClick={() =>
          this.ChangeColor(
            this.state.rdcolor[0] &&
              this.state.rdcolor[1] &&
              this.state.rdcolor[2]
          )
        }
        style={{ backgroundColor: color }}
      >
        {todos.map((todo, index) => {
          return (
            <ul>
              <li onClick={() => this.Ondelete(todo)}>
                {todo.id} : {todo.name} :{todo.status}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default TodoItem;
