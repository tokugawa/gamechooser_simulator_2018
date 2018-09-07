import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { GameAction } from '../actions';
import { games } from '../reducers';
import { IStoreState } from '../types';
import App from './App';

// TODO: move this into configureStore.js
function configureStore(preloadedState?: IStoreState) {
  return createStore<IStoreState, GameAction, null, null>(games, {
    games: [],
  });
}

const store = configureStore();

export class Root extends Component {
  public render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
};

export default Root;
