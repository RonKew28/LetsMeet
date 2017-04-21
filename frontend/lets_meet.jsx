//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { fetchGroups } from './util/group_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  debugger
  window.fetchGroups = fetchGroups;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
