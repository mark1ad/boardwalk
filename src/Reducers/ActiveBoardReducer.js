import {
  SET_ACTIVE_BOARD,
  ADD_ACTIVE_BOARD_TASKLISTS
} from "../Actions/ActionTypes";
import Tasklist from "../Helpers/Tasklist";

const initialState = {
  id: "",
  name: "",
  tasklists: []
};

export const ActiveBoard = (state = initialState, action) => {
  let tasklists;
  let dbTasklists;
  switch (action.type) {
    case (SET_ACTIVE_BOARD):
      return action.board;
    case (ADD_ACTIVE_BOARD_TASKLISTS):
      dbTasklists = action.tasklists; // tasklists are in db format
      tasklists = [];
      dbTasklists.forEach((tasklist) => tasklists.push( new Tasklist(tasklist)));
      return {...state, tasklists};
    default:
      return state;
  }
};
