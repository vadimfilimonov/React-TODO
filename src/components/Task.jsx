import React from "react";

const Task = ({ task, doneTask, undoneTask, deleteTask }) => {
  const DoneButton = () =>
    task.done ? (
      <button className="btn btn-warning" type="button" onClick={undoneTask}>
        Undone
      </button>
    ) : (
      <button className="btn btn-success" type="button" onClick={doneTask}>
        Done
      </button>
    );

  const DeleteButton = () => (
    <button className="btn btn-link mx-2" type="button" onClick={deleteTask}>
      Delete
    </button>
  );

  const Text = () =>
    task.done ? (
      <div className="align-self-center mr-auto">
        <s>{task.title}</s>
      </div>
    ) : (
      <div className="align-self-center mr-auto">{task.title}</div>
    );

  return (
    <li className="list-group-item d-flex align-items-start">
      <Text />
      <DeleteButton />
      <DoneButton />
    </li>
  );
};

export default Task;
