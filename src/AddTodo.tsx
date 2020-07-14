import React, { Component, ChangeEvent } from 'react';

export interface NewTodo {
  content: string;
  priority: boolean;
  addDate: string;
}

interface Props {
  addTodo: (todo: NewTodo) => void;
}

class AddTodo extends Component<Props, NewTodo> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: '',
      priority: false,
      addDate: '',
    };
  }

  handleContentChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const content = e.target.value;
    this.setState({
      content,
    });
  };

  handlePriorityChange = () => {
    this.setState({
      priority: !this.state.priority,
    });
  };

  handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      addDate: e.target.value,
    });
  };

  handleClick = (): void => {
    this.props.addTodo(this.state);

    this.setState({
      content: '',
      priority: false,
      addDate: '',
    });
  };

  render(): JSX.Element {
    return (
      <div>
        <div>
          <label htmlFor="add">Add new Todo</label>
          <input
            value={this.state.content}
            onChange={this.handleContentChange}
            type="text"
            id="add"
          />
          <label htmlFor="add_priority">Priority</label>
          <input
            checked={this.state.priority}
            onChange={this.handlePriorityChange}
            type="checkbox"
            id="add_priority"
          />
        </div>
        <div>
          <label htmlFor="add_data">Date of add</label>
          <input
            value={this.state.addDate}
            onChange={this.handleDateChange}
            type="date"
            id="add_data"
          />
        </div>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
