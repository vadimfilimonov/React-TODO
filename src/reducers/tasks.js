import { TASK_ADD, TASK_TOGGLE, TASK_REMOVE } from '../constants/action-types';

const getTasksFromStorage = () => {
  const savedTasks = localStorage.getItem('predefinedTasks');
  return JSON.parse(savedTasks) || [];
};

const saveTasksToStorage = (tasks) => {
  const stringifiedTasks = JSON.stringify(tasks);
  localStorage.setItem('predefinedTasks', stringifiedTasks);
};

const initialState = getTasksFromStorage();

export default function screen(state = initialState, action) {
  switch (action.type) {
    case TASK_ADD: {
      const newState = [...state, action.payload];
      saveTasksToStorage(newState);

      return newState;
    }

    case TASK_TOGGLE: {
      const newState = state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            done: !task.done,
          };
        }

        return task;
      });
      saveTasksToStorage(newState);

      return newState;
    }

    case TASK_REMOVE: {
      const newState = state.filter((task) => {
        if (task.id === action.payload) {
          return false;
        }

        return true;
      });
      saveTasksToStorage(newState);

      return newState;
    }

    default: {
      return state;
    }
  }
}
