import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import throttle from 'lodash.throttle';
import Rollbar from 'rollbar';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import App from './App';
import store from './slices';
import { hydrate } from './slices/tasksSlice';
import { getReduxStateFromStorage, saveReduxStateToStorage } from './helpers/storage';

const rollbarConfig = {
  accessToken: 'c5866796eedd46819ea8740fb8173e94',
  environment: process.env.NODE_ENV,
  captureUncaught: true,
  captureUnhandledRejections: true,
};

const rollbar = new Rollbar(rollbarConfig);

const persistedState = getReduxStateFromStorage();
if (persistedState) {
  const { tasks } = persistedState.tasksStore;
  store.dispatch(hydrate({ tasks }));
}

store.subscribe(
  throttle(() => {
    saveReduxStateToStorage(store.getState());
  }, 1000)
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RollbarProvider instance={rollbar}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </RollbarProvider>
    </Provider>
  </React.StrictMode>
);
