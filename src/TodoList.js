import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo} 
        />
      ))}
    </div>
  );
};

export default TodoList;
