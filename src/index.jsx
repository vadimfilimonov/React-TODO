import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import isEmpty from 'lodash/isEmpty';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import App from './App';
import store from './slices';
import { hydrate } from './slices/tasksSlice';
import { getReduxStateFromStorage, setReduxStateToStorage } from './helpers/storage';
import resources from './assets/locales';

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
});

const persistedState = getReduxStateFromStorage();
if (!isEmpty(persistedState)) {
  const { entities, ids } = persistedState.tasks;
  store.dispatch(hydrate({ entities, ids }));
}

store.subscribe(
  throttle(() => {
    setReduxStateToStorage(store.getState());
  }, 1000),
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
