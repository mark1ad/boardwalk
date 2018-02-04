import deepFreeze from 'deep-freeze';

import { CreateBoard } from './CreateBoardReducer';
import { openCreateBoard, closeCreateBoard } from "../Actions/CreateBoardActions";

it("create board default sucess", () => {
  const action = { type: "" };
  deepFreeze(action);
  const results = CreateBoard(undefined, action);
  expect(results).toEqual({isBoardOpen: false});
})

it("create board new board", () => {
  const action = openCreateBoard();
  deepFreeze(action);
  const results = CreateBoard({}, action);
  expect(results.isBoardOpen).toEqual(true)
})

it("cancel create board", () => {
  const action = closeCreateBoard();
  deepFreeze(action);
  const results = CreateBoard({isBoardOpen: true}, action);
  expect(results.isBoardOpen).toEqual(false);
})
