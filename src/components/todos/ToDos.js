import React from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

class ToDos extends React.Component {
    render() {
        return this.props.todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} toggleDone={this.props.toggleDone} deleteItem={this.props.deleteItem} />
        ));
    }
}

ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDos;
