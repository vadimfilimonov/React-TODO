// @ts-check
import React, {useState} from 'react';
import nextId from 'react-id-generator';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Task from './components/Task.jsx';
import TaskAdd from './components/TaskAdd.jsx';

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

  const doneTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      }
      task.done = true;
      return task;
    });
    setTasks(newTasks);
  };

  const undoneTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      }
      task.done = false;
      return task;
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
      <TaskAdd addTask={addTask}></TaskAdd>
      <List>
        {tasks.map((task) => (
          <Task
            doneTask={() => doneTask(task.id)}
            undoneTask={() => undoneTask(task.id)}
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
