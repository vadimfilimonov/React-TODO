import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Rollbar from 'rollbar';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import throttle from 'lodash/throttle';
import isEmpty from 'lodash/isEmpty';
import App from './App';
import store from './slices';
import { hydrate } from './slices/tasksSlice';
import { getReduxStateFromStorage, setReduxStateToStorage } from './helpers/storage';

const rollbarConfig = {
  accessToken: 'c5866796eedd46819ea8740fb8173e94',
  environment: process.env.NODE_ENV,
  captureUncaught: true,
  captureUnhandledRejections: true,
};

const rollbar = new Rollbar(rollbarConfig);

const persistedState = getReduxStateFromStorage();
if (!isEmpty(persistedState)) {
  const { entities, ids } = persistedState.tasks;
  store.dispatch(hydrate({ entities, ids }));
}

store.subscribe(
  throttle(() => {
    setReduxStateToStorage(store.getState());
  }, 1000)
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RollbarProvider instance={rollbar}>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </RollbarProvider>
  </React.StrictMode>
);
