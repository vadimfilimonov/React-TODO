// @ts-check
import React from 'react';
import { render } from 'react-dom';
import Rollbar from 'rollbar';
import { Provider, ErrorBoundary } from '@rollbar/react';
import App from './App';

const rollbarConfig = {
  accessToken: 'c5866796eedd46819ea8740fb8173e94',
  environment: process.env.NODE_ENV,
  captureUncaught: true,
  captureUnhandledRejections: true,
};

const rollbar = new Rollbar(rollbarConfig);

render(
  <React.StrictMode>
    <Provider instance={rollbar}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
