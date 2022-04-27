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
  const tasks = useSelector((state) => {
    const { ids } = state.tasksStore;
    const result = ids.map((id) => state.tasksStore.entities[id]);
    return result;
  });

  const handleToggleTask = (id, done) => () => {
    dispatch(toggleTask({ id, changes: { done: !done } }));
  };

  const handleRemoveTask = (id) => () => {
    dispatch(removeTask(id));
  };

  return (
    <List>
      {tasks.map(({ id, text, done }) => (
        <ListItem key={id} button onClick={handleToggleTask(id, done)}>
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
