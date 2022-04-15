import { TASK_ADD, TASK_TOGGLE, TASK_REMOVE } from '../constants/action-types';

export const addTask = (task) => {
  return {
    type: TASK_ADD,
    payload: task,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: TASK_TOGGLE,
    payload: taskId,
  };
};

export const removeTask = (taskId) => {
  return {
    type: TASK_REMOVE,
    payload: taskId,
  };
};
