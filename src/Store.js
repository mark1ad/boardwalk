import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Boards } from './Reducers/BoardReducers';
import { CreateBoard } from './Reducers/CreateBoardReducer';

let initStore = {};

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
  applyMiddleware(logger)(createStore)(combineReducers({Boards, CreateBoard}), initialState)

export default Store;
