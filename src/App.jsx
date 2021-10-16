// @ts-check
import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import uniqueId from 'lodash.uniqueid';
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

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const handleAddTask = (title) => {
    const newTask = {
      id: uniqueId(),
      title,
      done: false,
    };
    const newsTasks = [newTask, ...tasks];
    setTasks(newsTasks);
  };

  const handleToggleTask = (id) => {
    const newTasks = tasks.map((task) => ({
      ...task,
      done: task.id === id ? !task.done : task.done,
    }));
    setTasks(newTasks);
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
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
            onToggleTask={() => handleToggleTask(task.id)}
            onDeleteTask={() => handleDeleteTask(task.id)}
          />
        ))}
      </List>
    </Container>
  );
};

export default App;
