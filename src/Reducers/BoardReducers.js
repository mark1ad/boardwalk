import {
  SET_BOARDS,
  NEW_BOARD
} from "../Actions/ActionTypes";
import Board from "../Helpers/Board";

export const Boards = (state = [], action) => {
  let boardList;
  let board;
  switch (action.type) {
    case SET_BOARDS:
      boardList = action.boards.map(board => new Board(board));
      return boardList;
    case NEW_BOARD:
      board = new Board(action.board);
      boardList = [...state, board ];
      return boardList;
    default:
      return state;
  }
};
