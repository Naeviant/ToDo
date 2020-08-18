import React from "react";
import PropTypes from "prop-types";

class ToDoItem extends React.Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.done ? "line-through" : "none",
            display: "inline-block"
        }
    }

    render() {
        return (
            <div style={{padding: "10px", backgroundColor: "#f4f4f4", borderBottom: "1px #ccc dotted"}}>
                <input type="checkbox" checked={this.props.todo.done} onChange={this.props.toggleDone.bind(this, this.props.todo.id)} /> {" "}
                <h3 style={this.getStyle()}>{this.props.todo.title}</h3>
                <button className="button delete" onClick={this.props.deleteItem.bind(this, this.props.todo.id)}>Remove</button>
            </div>
        );
    }
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default ToDoItem;
