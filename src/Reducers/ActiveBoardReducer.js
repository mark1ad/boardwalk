import {
  SET_ACTIVE_BOARD
} from '../Actions/ActionTypes';
import Board from '../Helpers/Board';

export const ActiveBoard = (state = {}, action) => {
  switch (action.type) {
    case (SET_ACTIVE_BOARD):
      return action.board;
    default:
      return state;
  }
}
