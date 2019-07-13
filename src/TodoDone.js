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
                            {todo.addDate}
                            {todo.completeDate}
                            <button>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}





export default TodoDone;
