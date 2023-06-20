import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => {
    const handleDeleteTodo = (todo) => {
        deleteTodo(todo);
    };

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={handleDeleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;