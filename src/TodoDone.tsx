import React, { MouseEvent } from 'react';
import { Todo } from './App';

interface Props {
  todos: Todo[];
  removeTodo: (id: string) => void;
}
const TodoDone = (props: Props): JSX.Element => {
  return (
    <div>
      <h3>Done!</h3>
      <ul>
        {props.todos.map((todo: Todo) => {
          return (
            <li key={todo.id}>
              {todo.content}
              <button onClick={(e: MouseEvent) => props.removeTodo(todo.id)}>
                X
              </button>
              <p>Date of adding: {todo.addDate}</p>
              <p>Date of completing: {todo.completeDate}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoDone;
