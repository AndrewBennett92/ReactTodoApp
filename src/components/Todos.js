import React from "react";
import TodoItem from "./TodoItem";

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          deleteMe={this.props.deleteMe}
        />
      );
    });
  }
}

export default Todos;
