import React, {useState} from 'react';
import TodoList from './Components/Todolist';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      text: newTodo,
      isCrossedOut:false
    });
    setNewTodo('');
  };

  return (
    <div className='todo-list'>
      <form className='form' onSubmit={handleSubmit}>
        <input className='input'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className='submitBtn'  type="submit">Add Todo</button>
      </form>
      <TodoList className='list' todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
