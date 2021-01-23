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

const Task = ({task, doneTask, undoneTask, deleteTask}) => (
  <ListItem button onClick={() => (task.done ? undoneTask() : doneTask())}>
    <ListItemIcon>
      {task.done ? <CheckBoxOutlined /> : <CheckBoxOutlineBlankOutlined />}
    </ListItemIcon>
    <ListItemText
      primary={task.title}
      style={{textDecoration: task.done ? 'line-through' : 'none'}}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={deleteTask}>
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Task;
