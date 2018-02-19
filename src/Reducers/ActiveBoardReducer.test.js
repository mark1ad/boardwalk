import deepFreeze from 'deep-freeze';

import Board from '../Helpers/Board';
import Tasklist from '../Helpers/Tasklist';
import Task from '../Helpers/Task';

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
  const dbTask1 = {id: 1, name: "task1"};
  const dbTask2 = {id: 2, name: "task2"};

  const dbTasklist1 = {
    tasklist: {id: "1", name: "tasklist1"},
    tasks: [ dbTask1, dbTask2 ]
  };
  const dbTasklist2 = {
    tasklist: {id: "2", name: "tasklist2"},
    tasks: []
  };
  const tasklist1 = new Tasklist(dbTasklist1);
  const tasklist2 = new Tasklist(dbTasklist2)
  const action = addActiveBoardTasklists([ dbTasklist1, dbTasklist2 ]);
  deepFreeze(state);
  deepFreeze(action);
  const results = ActiveBoard(state, action);
  expect(results).toEqual({
    id: "1",
    name: "board name",
    tasklists: [ tasklist1, tasklist2 ]
  });
})
