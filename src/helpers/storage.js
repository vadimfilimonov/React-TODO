export const getReduxStateFromStorage = () => {
  const persistedState = localStorage.getItem('reduxState');
  return JSON.parse(persistedState) || {};
};

export const setReduxStateToStorage = (state) => {
  const persistedState = JSON.stringify(state);
  localStorage.setItem('reduxState', persistedState);
};

const SAVED_LANGUAGE_KEY = 'savedLanguage';

export const getCurrentLanguageFromStorage = () => {
  return localStorage.getItem(SAVED_LANGUAGE_KEY);
};

export const setCurrentLanguageToStorage = (language) => {
  localStorage.setItem(SAVED_LANGUAGE_KEY, language);
};
