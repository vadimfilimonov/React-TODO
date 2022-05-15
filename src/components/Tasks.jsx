import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Checkbox,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { toggleTask, removeTask, selectors } from '../slices/tasksSlice';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectors.selectAll);

  const handleToggleTask = (id, done) => () => {
    dispatch(toggleTask({ id, changes: { done: !done } }));
  };

  const handleRemoveTask = (id) => () => {
    dispatch(removeTask(id));
  };

  return (
    <List>
      {tasks.map(({ id, text, done }) => (
        <ListItemButton key={id} onClick={handleToggleTask(id, done)}>
          <ListItemIcon>
            <Checkbox checked={done} />
          </ListItemIcon>
          <ListItemText primary={text} />
          <ListItemSecondaryAction>
            <IconButton onClick={handleRemoveTask(id)}>
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItemButton>
      ))}
    </List>
  );
};

export default Tasks;
