import React from 'react';
import './TodoItem.css';

const TodoItems = ({ tasks, onComplete, onUndo, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="itemli">
          {task}
          {onComplete && <button onClick={() => onComplete(index)}>დასრულება</button>}
          {onUndo && <button onClick={() => onUndo(index)}>გადატანა</button>}
          {onDelete && <button onClick={() => onDelete(index)}>წაშლა</button>}
        </li>
      ))}
    </ul>
  );
};

export default TodoItems;
