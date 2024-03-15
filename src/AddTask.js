import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim() !== '') {
      dispatch(addTask(Math.random(), taskDescription.trim()));
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
