import React from 'react';
import uuid from 'uuid';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoDone from './TodoDone';

class App extends React.Component {
    state = {
        todos: [
            {
                id: uuid(),
                content: "shopping",
                priority: true,
                addDate: new Date().toLocaleDateString(),
                completeDate: "",
                complete: false,
            },
            {
                id: uuid(),
                content: "clean flat",
                priority: false,
                addDate: new Date().toLocaleDateString(),
                completeDate: "",
                complete: false,
            },
            {
                id: uuid(),
                content: "go to the gym",
                priority: false,
                addDate: new Date().toLocaleDateString(),
                completeDate: "",
                complete: false,
            },
        ]

    }
    addNewTodo = (todo) => {
        const newTodo = {
            id: uuid(),
            completeDate: '',
            complete: false,
            ...todo
        }
        this.setState({
            todos: [
                ...this.state.todos,
                newTodo,
            ]
        });
    }

    changeStatus = (id) => {
        const todos = this.state.todos.map(todo => {
            const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
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
    }

    removeTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos,
        })

    }

    render() {
        const completeTodo = this.state.todos.filter(todo => todo.complete);
        const uncompleteTodo = this.state.todos.filter(todo => !todo.complete);
        return (
            <div>
                <AddTodo addTodo={this.addNewTodo} />
                <TodoList todos={uncompleteTodo} changeStatus={this.changeStatus} removeTodo={this.removeTodo} />
                <TodoDone todos={completeTodo} removeTodo={this.removeTodo} />
            </div>
        )
    }
}




export default App;