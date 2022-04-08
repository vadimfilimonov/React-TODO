// @ts-check
import React, { useState } from 'react';
import { Container, Typography, List } from '@material-ui/core';
import { nanoid } from 'nanoid';
import Task from './components/Task';
import TaskAdd from './components/TaskAdd';

const extractTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem('predefinedTasks');
  return JSON.parse(savedTasks) || [];
};

const saveTasksToLocalStorage = (tasks) => {
  const stringifiedTasks = JSON.stringify(tasks);
  localStorage.setItem('predefinedTasks', stringifiedTasks);
};

const App = () => {
  const predefinedTasks = extractTasksFromLocalStorage();
  const [tasks, setTasks] = useState(predefinedTasks);

  const handleAddTask = (title) => {
    const newTask = {
      id: nanoid(),
      title,
      done: false,
    };
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  const handleToggleTask = (id) => () => {
    const newTasks = tasks.map((task) => ({
      ...task,
      done: task.id === id ? !task.done : task.done,
    }));
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="h1">
        todos
      </Typography>
      <TaskAdd onAddTask={handleAddTask} />
      <List>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleTask={handleToggleTask(task.id)}
            onDeleteTask={() => handleDeleteTask(task.id)}
          />
        ))}
      </List>
    </Container>
  );
};

export default App;
