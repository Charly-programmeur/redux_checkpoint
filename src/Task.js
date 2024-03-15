import React from 'react';

const Task = ({ task, onClick }) => {
  return (
    <li onClick={onClick} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      {task.description}
    </li>
  );
};

export default Task;