import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import middlewares from './middlewares';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, middlewares)
root.render(
  <FluentProvider theme={webLightTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </FluentProvider>
);