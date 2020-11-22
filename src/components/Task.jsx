// @ts-check
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const Task = ({ task, doneTask, undoneTask, deleteTask }) => (
  <ListItem button onClick={() => (task.done ? undoneTask() : doneTask())}>
    <ListItemIcon>
      {task.done ? (
        <CheckBoxOutlinedIcon />
      ) : (
        <CheckBoxOutlineBlankOutlinedIcon />
      )}
    </ListItemIcon>
    <ListItemText
      primary={task.title}
      style={{ textDecoration: task.done ? "line-through" : "none" }}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Task;
