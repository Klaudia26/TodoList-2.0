import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddTodo, { NewTodo } from './AddTodo';
import TodoList from './TodoList';
import TodoDone from './TodoDone';

export interface Todo {
  id: string;
  content: string;
  priority: boolean;
  addDate: string;
  completeDate: string;
  complete: boolean;
}

interface State {
  todos: Todo[];
}

interface Props {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todos: [
        {
          id: v4(),
          content: 'shopping',
          priority: true,
          addDate: new Date().toLocaleDateString(),
          completeDate: '',
          complete: false,
        },
        {
          id: v4(),
          content: 'clean flat',
          priority: false,
          addDate: new Date().toLocaleDateString(),
          completeDate: '',
          complete: false,
        },
        {
          id: v4(),
          content: 'go to the gym',
          priority: false,
          addDate: new Date().toLocaleDateString(),
          completeDate: '',
          complete: false,
        },
      ],
    };
  }

  addNewTodo = (todo: NewTodo) => {
    const newTodo: Todo = {
      id: v4(),
      completeDate: '',
      complete: false,
      ...todo,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  changeStatus = (id: string) => {
    const todos = this.state.todos.map((todo) => {
      const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
      if (todo.id === id) {
        todo.complete = true;
        todo.completeDate = date;
        return todo;
      } else {
        return todo;
      }
    });

    this.setState({
      todos,
    });
  };

  removeTodo = (id: string) => {
    const todos = this.state.todos.filter((todo: Todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  render(): JSX.Element {
    const completeTodo = this.state.todos.filter((todo: Todo) => todo.complete);
    const uncompletedTodo = this.state.todos.filter(
      (todo: Todo) => !todo.complete
    );

    return (
      <div>
        <AddTodo addTodo={this.addNewTodo} />
        <TodoList
          todos={uncompletedTodo}
          changeStatus={this.changeStatus}
          removeTodo={this.removeTodo}
        />
        <TodoDone todos={completeTodo} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
