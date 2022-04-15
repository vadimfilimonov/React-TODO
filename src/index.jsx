import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Rollbar from 'rollbar';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import App from './App';
import configureStore from './configureStore';

const rollbarConfig = {
  accessToken: 'c5866796eedd46819ea8740fb8173e94',
  environment: process.env.NODE_ENV,
  captureUncaught: true,
  captureUnhandledRejections: true,
};

const rollbar = new Rollbar(rollbarConfig);

const store = configureStore();

render(
  <React.StrictMode>
    <Provider store={store}>
      <RollbarProvider instance={rollbar}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </RollbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
