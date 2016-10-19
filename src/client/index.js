
// Demo client index.js file
// kyt expects every app to have this entry point.

import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './../components/App';

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'COUNT':
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

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
}

mount(App);
