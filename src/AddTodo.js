import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: "",
        priority: false,
        addDate: "",
    }
    handleContentChange = (e) => {
        const content = e.target.value;
        this.setState({
            content,
        });
    }
    handlePriorityChange = () => {
        this.setState({
            priority: !this.state.priority,
        });
    }
    handleDateChange = (e) => {
        this.setState({
            addDate: e.target.value,
        });
    }
    handleClick = () => {
        this.props.addTodo(this.state);
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                <div>
                    <label htmlFor="add">Add new Todo</label>
                    <input value={this.state.content} onChange={this.handleContentChange} type="text" id="add" />
                    <label htmlFor="add_priority">Priority</label>
                    <input checked={this.state.priority} onChange={this.handlePriorityChange} type="checkbox" id="add_priority" />
                </div>
                <div>
                    <label htmlFor="add_data">Date of add</label>
                    <input value={this.state.addDate} onChange={this.handleDateChange} type="date" id="add_data" />
                </div>
                <button onClick={this.handleClick}>Add</button>

            </div>
        )
    }
}

export default AddTodo;
