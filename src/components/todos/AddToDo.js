import React from "react";

class AddToDo extends React.Component {
    state = {
        title: ""
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({ title: "" })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ padding: "5px 10px", maxWidth: "500px", margin: "auto", marginTop: "20px" }}>
                <input type="text" name="title" placeholder="New ToDo" value={this.state.title} onChange={this.onChange} style={{ width: "calc(100% - 75px)", marginRight: "5px" }} />
                <input type="submit" value="Add" className="button add" style={{ width: "70px" }} />
            </form>
        );
    }
}

export default AddToDo;
