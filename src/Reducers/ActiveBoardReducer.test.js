import deepFreeze from 'deep-freeze';

import Board from '../Helpers/Board';
import Tasklist from '../Helpers/Tasklist';

import { ActiveBoard } from './ActiveBoardReducer';
import {
  setActiveBoard,
  addActiveBoardTasklists
} from '../Actions/ActiveBoardActions';

it("board default sucess", () => {
  const action = { type: ""};
  deepFreeze(action);
  const results = ActiveBoard(undefined, action);
  expect(results).toEqual({id: "", name: "", tasklists: []});
})

it("set active board", () => {
  const state = {};
  const action = setActiveBoard({id: "1", name: "board name"});
  deepFreeze(state);
  deepFreeze(action);
  const results = ActiveBoard(state, action);
  expect(results).toEqual({id: "1", name: "board name"});
})

it("add tasklists", () => {
  const state = {id: "1", name: "board name" };
  const tasklist1 = new Tasklist({id: "1", name: "tasklist1"});
  const tasklist2 = new Tasklist({id: "2", name: "tasklist2"});
  const tasklists = [ tasklist1, tasklist2 ];
  const action = addActiveBoardTasklists(tasklists);
  deepFreeze(state);
  deepFreeze(action);
  const results = ActiveBoard(state, action);
  expect(results).toEqual({
    id: "1",
    name: "board name",
    tasklists: tasklists
  });
})
