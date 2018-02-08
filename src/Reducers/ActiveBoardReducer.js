import {
  SET_ACTIVE_BOARD,
  ADD_ACTIVE_BOARD_TASKLISTS
} from '../Actions/ActionTypes';

export const ActiveBoard = (state = {}, action) => {
  switch (action.type) {
    case (SET_ACTIVE_BOARD):
      return action.board;
    case (ADD_ACTIVE_BOARD_TASKLISTS):
      const tasklists = action.tasklists;
      return {...state, tasklists};
    default:
      return state;
  }
}
