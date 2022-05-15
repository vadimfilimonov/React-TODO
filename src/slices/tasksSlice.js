import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter();
const initialState = tasksAdapter.getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    hydrate: (_state, action) => {
      return action.payload;
    },
    addTask: tasksAdapter.addOne,
    toggleTask: tasksAdapter.updateOne,
    removeTask: tasksAdapter.removeOne,
  },
});

export const { addTask, toggleTask, removeTask, hydrate } = tasksSlice.actions;
export const selectors = tasksAdapter.getSelectors((state) => state.tasks);
export default tasksSlice.reducer;
