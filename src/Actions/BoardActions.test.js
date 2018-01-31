import { setBoards } from './BoardActions';
import { SET_BOARDS } from './ActionTypes';
import Board from '../Helpers/Board';

it('action setBoards empty list', () => {
  const action = setBoards([]);
  expect(action).toEqual({
    type: SET_BOARDS,
    boards: []
  })
})

it('action setBoards', () => {
  const board = new Board("1", "board name");
  const action = setBoards([board]);
  expect(action).toEqual({
    type: SET_BOARDS,
    boards: [ board ]
  })
})
