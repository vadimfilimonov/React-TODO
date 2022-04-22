export const getReduxStateFromStorage = () => {
  const persistedState = localStorage.getItem('reduxState');
  return JSON.parse(persistedState) || {};
};

export const saveReduxStateToStorage = (state) => {
  const persistedState = JSON.stringify(state);
  localStorage.setItem('reduxState', persistedState);
};
