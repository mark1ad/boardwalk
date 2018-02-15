import {
  SET_ACTIVE_BOARD,
  ADD_ACTIVE_BOARD_TASKLISTS
} from "../Actions/ActionTypes";

const initialState = {
  id: "",
  name: "",
  tasklists: []
};

export const ActiveBoard = (state = initialState, action) => {
  let tasklists;
  switch (action.type) {
    case (SET_ACTIVE_BOARD):
      return action.board;
    case (ADD_ACTIVE_BOARD_TASKLISTS):
      tasklists = action.tasklists;
      return {...state, tasklists};
    default:
      return state;
  }
};
