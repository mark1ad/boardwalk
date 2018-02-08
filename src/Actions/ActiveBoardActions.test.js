import { setActiveBoard } from './ActiveBoardActions';
import {SET_ACTIVE_BOARD} from './ActionTypes';
import Board from '../Helpers/Board';

it('action setActiveBoard', () => {
  const board = new Board("1", "board name");
  const action = setActiveBoard(board);
  expect(action).toEqual({
    type: SET_ACTIVE_BOARD,
    board: board
  })
})
