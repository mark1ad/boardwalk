import {
  SET_BOARDS,
  NEW_BOARD
} from './ActionTypes.js';

export const setBoards = (boards) =>
({
  type: SET_BOARDS,
  boards: boards
})

export const newBoard = (board) =>
({
  type: NEW_BOARD,
  board: board
})
