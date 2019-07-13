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
                addDate: new Date().toDateString(),
                completeDate: "",
                complete: false,
            },
            {
                id: uuid(),
                content: "clean flat",
                priority: false,
                addDate: new Date().toDateString(),
                completeDate: "",
                complete: false,
            },
            {
                id: uuid(),
                content: "go to the gym",
                priority: false,
                addDate: new Date().toDateString(),
                completeDate: new Date().toDateString(),
                complete: true,
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


    render() {
        const completeTodo = this.state.todos.filter(todo => todo.complete);
        return (
            <div>
                <AddTodo addTodo={this.addNewTodo} />
                <TodoList todos={this.state.todos} />
                <TodoDone todos={completeTodo} />
            </div>
        )
    }
}




export default App;