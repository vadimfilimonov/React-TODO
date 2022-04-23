/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  ids: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    hydrate: (_state, action) => {
      return action.payload;
    },
    addTask: (state, { payload: { task } }) => {
      state.entities[task.id] = task;
      state.ids.unshift(task.id);
    },
    toggleTask: (state, { payload: { id } }) => {
      state.entities[id].done = !state.entities[id].done;
    },
    removeTask: (state, { payload: { id } }) => {
      delete state.entities[id];
      state.ids = state.ids.filter((taskId) => taskId !== id);
    },
  },
});

export const { addTask, toggleTask, removeTask, hydrate } = tasksSlice.actions;

export default tasksSlice.reducer;
