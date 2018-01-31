import { SET_BOARDS } from '../Actions/ActionTypes';
import Board from '../Helpers/Board';

export const Boards = (state = {boards: []}, action) => {
  switch (action.type) {
    case SET_BOARDS:
      const boardList = action.boards.map(board => new Board(board));
      return {boards: boardList};
    default:
        return state;
  }
}
