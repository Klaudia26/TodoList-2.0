import React, { MouseEvent } from 'react';
import { Todo } from './App';

interface Props {
  todos: Todo[];
  changeStatus: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList = (props: Props): JSX.Element => {
  const handleDoneClick = (e: MouseEvent, id: string): void => {
    props.changeStatus(id);
  };

  const handleRemoveClick = (e: MouseEvent, id: string): void => {
    props.removeTodo(id);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {props.todos.map((todo: Todo) => {
          const color = todo.priority ? 'red' : 'black';
          return (
            <li key={todo.id} style={{ color: `${color}` }}>
              {todo.content} - {todo.addDate}
              <button onClick={(e) => handleDoneClick(e, todo.id)}>Done</button>
              <button onClick={(e) => handleRemoveClick(e, todo.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
