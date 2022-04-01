// @ts-check
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

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
      <TextField
        style={{ flexGrow: 1 }}
        variant="outlined"
        label="What needs to be done?"
        value={value}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" type="submit" startIcon={<SaveIcon />} disabled={value.length === 0}>
        Add
      </Button>
    </form>
  );
};

export default TaskAdd;
