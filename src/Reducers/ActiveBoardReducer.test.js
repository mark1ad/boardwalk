import deepFreeze from 'deep-freeze';

import Board from '../Helpers/Board';

import { ActiveBoard } from './ActiveBoardReducer';
import {
  setActiveBoard
} from '../Actions/ActiveBoardActions';

it("board default sucess", () => {
  const action = { type: ""};
  deepFreeze(action);
  const results = ActiveBoard(undefined, action);
  expect(results).toEqual({});
})

it("set active board", () => {
  const state = {};
  const action = setActiveBoard({id: "1", name: "board name"});
  deepFreeze(state);
  deepFreeze(action);
  const results = ActiveBoard(state, action);
  expect(results).toEqual({id: "1", name: "board name"});
})
