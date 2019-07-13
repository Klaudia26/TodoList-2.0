import React from 'react';


const TodoDone = (props) => {
    return (
        <div>
            <h3>Done!</h3>
            <ul>
                {props.todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            {todo.content}
                            <button onClick={(e) => props.removeTodo(todo.id)}>X</button>
                            <p>Date of adding: {todo.addDate}</p>
                            <p>Date of completing: {todo.completeDate}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}





export default TodoDone;
