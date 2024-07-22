import React,{useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      };
      setTodos([newTodo, ...todos]);
    };
  
    const toggleComplete = (id) => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    const removeTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    return (
      <div className="app">
        <h1>Todo App </h1>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo} 
        />
      </div>
  );
}

export default App;
