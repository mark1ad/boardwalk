import {
  OPEN_CREATE_BOARD,
  CLOSE_CREATE_BOARD
} from './ActionTypes';

export const openCreateBoard = () => ({
  type: OPEN_CREATE_BOARD
})

export const closeCreateBoard = () => ({
  type: CLOSE_CREATE_BOARD
})
