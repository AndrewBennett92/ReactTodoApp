import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    todoDescription: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoDescription);
    this.setState({
      todoDescription: ""
    });
  };

  valueChanged = e => {
    console.log("value changed", e.target.value);
    this.setState({
      todoDescription: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo..."
          value={this.state.todoDescription}
          onChange={this.valueChanged}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
