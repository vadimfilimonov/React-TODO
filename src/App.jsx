import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, List, Stack } from '@mui/material';
import { nanoid } from 'nanoid';
import Task from './components/Task';
import Form from './components/Form';
import { addTask, toggleTask, removeTask } from './slices/tasksSlice';

const App = () => {
  const tasks = useSelector((state) => state.tasksStore.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (title) => {
    const task = {
      id: nanoid(),
      title,
      done: false,
    };
    dispatch(addTask({ task }));
  };

  const handleToggleTask = (id) => () => {
    dispatch(toggleTask({ id }));
  };

  const handleRemoveTask = (id) => () => {
    dispatch(removeTask({ id }));
  };

  return (
    <Container maxWidth="sm">
      <Stack mt={15}>
        <Form onAddTask={handleAddTask} />
        <List>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleTask={handleToggleTask(task.id)}
              onRemoveTask={handleRemoveTask(task.id)}
            />
          ))}
        </List>
      </Stack>
    </Container>
  );
};

export default App;
