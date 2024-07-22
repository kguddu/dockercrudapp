import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleComplete(todo.id)} 
      />
      <span className={todo.completed ? 'completed' : ''}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
