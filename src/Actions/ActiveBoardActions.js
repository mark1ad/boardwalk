import {
  SET_ACTIVE_BOARD,
  ADD_ACTIVE_BOARD_TASKLISTS
} from './ActionTypes.js';

export const setActiveBoard = (board) =>
({
  type: SET_ACTIVE_BOARD,
  board: board
})

export const addActiveBoardTasklists = (tasklists) =>
({
  type: ADD_ACTIVE_BOARD_TASKLISTS,
  tasklists: tasklists
})
