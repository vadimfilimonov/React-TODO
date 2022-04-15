// @ts-check
import React from 'react';
import { Checkbox, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const Task = ({ task, onToggleTask, onRemoveTask }) => (
  <ListItem button onClick={onToggleTask}>
    <ListItemIcon>
      <Checkbox checked={task.done} />
    </ListItemIcon>
    <ListItemText primary={task.title} />
    <ListItemSecondaryAction>
      <IconButton onClick={onRemoveTask}>
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Task;
