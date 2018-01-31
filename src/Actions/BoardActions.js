import { SET_BOARDS } from './ActionTypes.js';

export const setBoards = (boards) =>
({
  type: SET_BOARDS,
  boards: boards
})
