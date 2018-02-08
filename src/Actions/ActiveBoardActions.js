import {
  SET_ACTIVE_BOARD
} from './ActionTypes.js';

export const setActiveBoard = (board) =>
({
  type: SET_ACTIVE_BOARD,
  board: board
})
