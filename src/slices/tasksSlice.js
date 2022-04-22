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
    addTask: (state, { payload: { task } }) => {
      state.tasks = [task, ...state.tasks];
    },
    toggleTask: (state, { payload: { id } }) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id !== id) {
          return task;
        }

        return {
          ...task,
          done: !task.done,
        };
      });
    },
    removeTask: (state, { payload: { id } }) => {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, toggleTask, removeTask, hydrate } = tasksSlice.actions;

export default tasksSlice.reducer;
