import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      res => {
        this.setState({
          todos: res.data
        });
      }
    );
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTaskItem = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      res => {
        this.setState({
          todos: this.state.todos.filter(todoItem => {
            return todoItem.id === id ? false : true;
          })
        });
      }
    );
  };

  addTodo = title => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    }).then(res => {
      this.setState({
        todos: [...this.state.todos, res.data]
      });
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteMe={this.deleteTaskItem}
                  />
                </React.Fragment>
              )}
            />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
