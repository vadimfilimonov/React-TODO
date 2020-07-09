import React from 'react';

const Task = ({ task, doneTask, undoneTask, deleteTask }) => {
  const DoneButton = () => task.done ?
    <button className="task__button" type="button" onClick={undoneTask}>Undone</button> :
    <button className="task__button" type="button" onClick={doneTask}>Done</button>;
  const DeleteButton = () => <button className="task__button task__button-is-delete" type="button" onClick={deleteTask}>Delete</button>;

  const className = 'task ' + (task.done ? 'task-is-done' : '');

  return (
    <div className={className}>
      <p className="task__text">{task.title}</p>
      <DeleteButton></DeleteButton>
      <DoneButton></DoneButton>
    </div>
  );
};

export default Task;
