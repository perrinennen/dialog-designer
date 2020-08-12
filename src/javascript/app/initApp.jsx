import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App';
import getStore from './store';
import appRootProxy from '../tools/appRootProxy';
import initWebComponents from './WebComponents';

const initApp = () => {
  const appRoot = document.getElementById('app');
  if (!appRoot) {
    return;
  }

  const initialState = {};
  const loadedStructure = JSON.parse(window.localStorage.getItem('dndd-test-structure'));

  if (loadedStructure) {
    initialState.structure = loadedStructure;
  }

  const store = getStore(initialState);
  window.store = store;

  initWebComponents(store);

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    appRootProxy(appRoot),
  );
};

export default initApp;
