import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
