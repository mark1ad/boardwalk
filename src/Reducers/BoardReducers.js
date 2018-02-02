import {
  SET_BOARDS,
  NEW_BOARD
} from '../Actions/ActionTypes';
import Board from '../Helpers/Board';

export const Boards = (state = {boards: []}, action) => {
  let boardList;
  switch (action.type) {
    case SET_BOARDS:
      boardList = action.boards.map(board => new Board(board));
      return {boards: boardList};
    case NEW_BOARD:
      const board = new Board(action.board);
      boardList = [...state.boards, board ];
      return {boards: boardList};
    default:
        return state;
  }
}
