export const getReduxStateFromStorage = () => {
  const persistedState = localStorage.getItem('reduxState');
  return JSON.parse(persistedState) || {};
};

export const setReduxStateToStorage = (state) => {
  const persistedState = JSON.stringify(state);
  localStorage.setItem('reduxState', persistedState);
};
