import React from 'react';
import { Container } from '@mui/material';
import NewTaskForm from './components/NewTaskForm';
import Tasks from './components/Tasks';
import LanguageSwitcher from './components/LanguageSwitcher';

const switcherStyles = {
  position: 'absolute',
  top: 34,
  right: 8,
  transform: 'translateY(-50%)',
};

function App() {
  return (
    <Container maxWidth="sm">
      <NewTaskForm />
      <Tasks />
      <div style={switcherStyles}>
        <LanguageSwitcher />
      </div>
    </Container>
  );
}

export default App;
