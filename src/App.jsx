// @ts-check
import React, {useState} from 'react';
import nextId from 'react-id-generator';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Task from './components/Task';
import TaskAdd from './components/TaskAdd';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: nextId(),
      title,
      done: false,
    };
    const newsTasks = [newTask, ...tasks];
    setTasks(newsTasks);
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map((task) => {
      const newTask = task;
      if (task.id === id) {
        newTask.done = !task.done;
      }
      return newTask;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="h1">
        todos
      </Typography>
      <TaskAdd addTask={addTask} />
      <List>
        {tasks.map((task) => (
          <Task
            toggleTask={() => toggleTask(task.id)}
            deleteTask={() => deleteTask(task.id)}
            task={task}
            key={task.id}
          />
        ))}
      </List>
    </Container>
  );
};

export default App;
