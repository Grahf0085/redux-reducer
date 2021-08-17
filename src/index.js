import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ReduxProvider } from './state/ReduxProvider';

render(
  <ReduxProvider>
    <App />
  </ ReduxProvider>,
  document.getElementById('root')
);
