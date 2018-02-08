import {
  SET_ACTIVE_BOARD
} from '../Actions/ActionTypes';

export const ActiveBoard = (state = {}, action) => {
  switch (action.type) {
    case (SET_ACTIVE_BOARD):
      return action.board;
    default:
      return state;
  }
}
