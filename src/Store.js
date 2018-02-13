import { createStore, combineReducers, applyMiddleware } from "redux";

import { Boards } from "./Reducers/BoardReducers";
import { CreateBoard } from "./Reducers/CreateBoardReducer";
import { ActiveBoard } from "./Reducers/ActiveBoardReducer";

let initStore = {};

const logger = store => next => action => {
  // console.groupCollapsed("dispatching ", action.type)
  /* eslint-disable no-console */
  console.log("\n>>> Dispatching ", action.type);
  console.log("prev state ", store.getState());
  console.log("action ", action);
  next(action);
  console.log("next state ", store.getState());
  console.log("\n");
  // console.groupEnd();
  /* eslint-enable no-console */
};

const Store = (initialState = initStore) =>
  applyMiddleware(logger)(createStore)(combineReducers({Boards, CreateBoard, ActiveBoard}), initialState);

export default Store;
