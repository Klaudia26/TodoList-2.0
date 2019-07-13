import React from 'react';

const TodoList = (props) => {
    const handleDoneClick = (e, id) => {
        props.changeStatus(id);
    }
    const handleRemoveClick = (e, id) => {
        props.removeTodo(id);
    }
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {props.todos.map(todo => {
                    const color = todo.priority ? "red" : "black";
                    return (
                        <li key={todo.id} style={{ color: `${color}` }}>
                            {todo.content} - {todo.addDate}
                            <button onClick={(e) => handleDoneClick(e, todo.id)}>Done</button>
                            <button onClick={(e) => handleRemoveClick(e, todo.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;
