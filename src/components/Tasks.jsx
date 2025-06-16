import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import { toggleTask, removeTask, selectors } from '../slices/tasksSlice';

function Tasks() {
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
          <ListItem secondaryAction={
            <IconButton onClick={handleRemoveTask(id)}>
              <Delete />
            </IconButton>} />
        </ListItemButton>
      ))}
    </List>
  );
}

export default Tasks;
