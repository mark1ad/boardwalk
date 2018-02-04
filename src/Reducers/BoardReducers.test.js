import deepFreeze from 'deep-freeze';

import Board from '../Helpers/Board';
import { Boards } from './BoardReducers';
import {
  setBoards,
  newBoard
} from '../Actions/BoardActions';

const boardList = [
  { id: 1, name: "board1"},
  { id: 2, name: "board2"}
];

it("board default success", () => {
  const action = { type: ""};
  deepFreeze(action);
  const results = Boards(undefined, action);
  expect(results).toEqual([]);
})

it("board set list", () => {
  const state = [];
  const action = setBoards( boardList);
  deepFreeze(state);
  deepFreeze(action);
  const results = Boards(state, action);
  expect(results).toEqual( boardList);
})

it("add new board", () => {
  const state = boardList;
  const board = new Board({id: 3, name: "board3"});
  const action = newBoard( board);
  deepFreeze(state);
  deepFreeze(action);
  const results = Boards(state, action);
  // expect(results).toEqual([...boardList, board]);
})
