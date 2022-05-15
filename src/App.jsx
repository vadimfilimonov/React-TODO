import React from 'react';
import { Container } from '@mui/material';
import NewTaskForm from './components/NewTaskForm';
import Tasks from './components/Tasks';

const App = () => (
  <Container maxWidth="sm">
    <NewTaskForm />
    <Tasks />
  </Container>
);

export default App;
