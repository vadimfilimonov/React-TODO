import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const tasksEntityAdapter = createEntityAdapter();

const initialState = tasksEntityAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    hydrate: (_state, action) => {
      return action.payload;
    },
    addTask: tasksEntityAdapter.addOne,
    toggleTask: tasksEntityAdapter.updateOne,
    removeTask: tasksEntityAdapter.removeOne,
  },
});

export const { addTask, toggleTask, removeTask, hydrate } = tasksSlice.actions;

export default tasksSlice.reducer;
