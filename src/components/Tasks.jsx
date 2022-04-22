import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { toggleTask, removeTask } from '../slices/tasksSlice';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksStore.tasks);

  const handleToggleTask = (id) => () => {
    dispatch(toggleTask({ id }));
  };

  const handleRemoveTask = (id) => () => {
    dispatch(removeTask({ id }));
  };

  return (
    <List>
      {tasks.map(({ id, text, done }) => (
        <ListItem key={id} button onClick={handleToggleTask(id)}>
          <ListItemIcon>
            <Checkbox checked={done} />
          </ListItemIcon>
          <ListItemText primary={text} />
          <ListItemSecondaryAction>
            <IconButton onClick={handleRemoveTask(id)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default Tasks;