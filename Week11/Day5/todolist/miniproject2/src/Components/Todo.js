import React, { useState } from 'react';

const Todo = ({ todo, deleteTodo }) => {
    const [isCrossedOut, setIsCrossedOut] = useState(false);

    const handleCrossout = () => {
        setIsCrossedOut(!isCrossedOut);
    };

  return (
    <div className='todo-card'>
        <span
           className={isCrossedOut ? 'crossed-out' : ''}
           onClick={handleCrossout}
           >
            {todo.text}
        </span>
        <button className='deleteBtn' onClick={() => deleteTodo(todo)}>X</button>
        
    </div>
  );
  
};

export default Todo;