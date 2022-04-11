// @ts-check
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const TaskAdd = ({ onAddTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(value);
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <TextField style={{ flexGrow: 1 }} label="What needs to be done?" value={value} onChange={handleChange} />
      <Button variant="contained" color="primary" type="submit" disabled={value.length === 0}>
        Add
      </Button>
    </form>
  );
};

export default TaskAdd;
