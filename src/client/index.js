
// Demo client index.js file
// kyt expects every app to have this entry point.

import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import App from './../components/App';

const devToolsExtension = (
  typeof window.devToolsExtension === 'function'
) ? window.devToolsExtension() : f => f;

const store = createStore(reducer, void 0, devToolsExtension);

const root = document.querySelector('#root');

const mount = RootComponent => render(
  <AppContainer>
    <Provider store={store}>
      <RootComponent />
    </Provider>
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./../components/App', () => {
    const RootComponent = require('./../components/App').default; // eslint-disable-line
    mount(RootComponent);
  });

  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default;
    store.replaceReducer(nextReducer);
  });
}

mount(App);
