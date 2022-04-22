/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    hydrate: (_state, action) => {
      return action.payload;
    },
    addTask: (state, action) => {
      const { task } = action.payload;
      state.tasks = [task, ...state.tasks];
    },
    toggleTask: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }

        return task;
      });
    },
    removeTask: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, toggleTask, removeTask, hydrate } = tasksSlice.actions;

export default tasksSlice.reducer;
