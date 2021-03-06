import React from "react";
import "./App.css";
import ToDos from "./components/todos/ToDos";
import AddToDo from "./components/todos/AddToDo"
import Header from "./components/layout/Header"
import {v4 as uuid} from "uuid"; 

class App extends React.Component {
  state = {
    todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  }

  updateLocalStorage = () => {
    var todos = this.state.todos;
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addItem = (title) => {
    var newToDo = {
      id: uuid(),
      title: title,
      done: false
    }
    this.setState({ todos: [...this.state.todos, newToDo] }, () => {
      this.updateLocalStorage();
    });
  }

  toggleDone = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    }) }, () => {
      this.updateLocalStorage();
    });
  }

  deleteItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }, () => {
      this.updateLocalStorage();
    });
  }

  render() {
    console.log(JSON.parse(localStorage.getItem("todos")))
    return (
      <div className="App">
      <Header />
      <ToDos todos={this.state.todos} toggleDone={this.toggleDone} deleteItem={this.deleteItem} />
      <AddToDo addItem={this.addItem} />
      </div>
      );
  }
}

export default App;
