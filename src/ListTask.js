import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, filterTasks } from './actions';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <button onClick={() => dispatch(filterTasks('all'))}>All</button>
      <button onClick={() => dispatch(filterTasks('done'))}>Done</button>
      <button onClick={() => dispatch(filterTasks('notDone'))}>Not Done</button>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} onClick={() => dispatch(toggleTask(task.id))} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
