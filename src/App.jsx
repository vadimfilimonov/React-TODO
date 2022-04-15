// @ts-check
import React from 'react';
import { connect } from 'react-redux';
import { Container, List, Stack } from '@mui/material';
import { nanoid } from 'nanoid';
import Task from './components/Task';
import Form from './components/Form';
import { addTask, toggleTask, removeTask } from './actions/tasks';

const App = ({ tasks, onAddTask, onToggleTask, onRemoveTask }) => {
  const handleAddTask = (title) => {
    const newTask = {
      id: nanoid(),
      title,
      done: false,
    };
    onAddTask(newTask);
  };

  const handleToggleTask = (id) => () => {
    onToggleTask(id);
  };

  const handleRemoveTask = (id) => () => {
    onRemoveTask(id);
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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = {
  onAddTask: addTask,
  onToggleTask: toggleTask,
  onRemoveTask: removeTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
