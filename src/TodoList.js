import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {props.todos.map(todo => {
                    const color = todo.priority ? "red" : "black";
                    return (
                        <li key={todo.id} style={{ color: `${color}` }}>
                            {todo.content} - {todo.addDate}
                            <button>Done</button>
                            <button>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;
