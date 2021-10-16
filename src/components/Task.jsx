// @ts-check
import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import {
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined,
  Delete,
} from '@material-ui/icons';

const Task = ({task, onToggleTask, onDeleteTask}) => (
  <ListItem button onClick={onToggleTask}>
    <ListItemIcon>
      {task.done ? <CheckBoxOutlined /> : <CheckBoxOutlineBlankOutlined />}
    </ListItemIcon>
    <ListItemText
      primary={task.title}
      style={{textDecoration: task.done ? 'line-through' : 'none'}}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={onDeleteTask}>
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Task;
