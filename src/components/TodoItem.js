import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  setStyle = () => {
    return {
      padding: "10px",
      backgroundColor: "#ccdad1",
      borderBottom: "1px solid #9caea9",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.setStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />{" "}
        {}
        {title}
        <button style={btnStyle} onClick={this.props.deleteMe.bind(this, id)}>
          X
        </button>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
