import { TASK_ADD, TASK_TOGGLE, TASK_REMOVE } from '../constants/action-types';

const initialState = {};

export default function screen(state = initialState, action = {}) {
  switch (action.type) {
    case TASK_ADD: {
      const newState = [...state, action.payload];
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

      return newState;
    }

    case TASK_REMOVE: {
      const newState = state.filter((task) => {
        if (task.id === action.payload) {
          return false;
        }

        return true;
      });

      return newState;
    }

    default: {
      return state;
    }
  }
}
