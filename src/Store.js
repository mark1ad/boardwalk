import { createStore, applyMiddleware } from 'redux';

import { Boards } from './Reducers/BoardReducers';

let initStore = {boards:[]};

const logger = store => next => action => {
  // console.groupCollapsed("dispatching ", action.type)
  console.log('\n>>> Dispatching ', action.type);
  console.log('prev state ', store.getState());
  console.log('action ', action);
  next(action)
  console.log('next state ', store.getState());
  console.log('\n');
  // console.groupEnd();
}

const Store = (initialState = initStore) =>
  applyMiddleware(logger)(createStore)(Boards, initialState);

export default Store;
