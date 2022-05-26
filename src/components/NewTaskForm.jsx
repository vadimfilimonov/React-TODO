// @ts-check
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { nanoid } from 'nanoid';
import { Button, TextField } from '@mui/material';
import { addTask } from '../slices/tasksSlice';

const NewTaskForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleUpdateNewTaskText = (event) => {
    setText(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const task = {
      text,
      id: nanoid(),
      done: false,
    };
    dispatch(addTask(task));
    setText('');
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleAddTask}>
      <TextField
        required
        style={{ flexGrow: 1 }}
        label={t('newTaskForm.inputPlaceholder')}
        value={text}
        onChange={handleUpdateNewTaskText}
      />
      <Button variant="contained" color="primary" type="submit">
        {t('newTaskForm.button')}
      </Button>
    </form>
  );
};

export default NewTaskForm;
