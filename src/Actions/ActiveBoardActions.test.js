import {
  setActiveBoard,
  addActiveBoardTasklists
} from "./ActiveBoardActions";
import {
  SET_ACTIVE_BOARD,
  ADD_ACTIVE_BOARD_TASKLISTS
} from "./ActionTypes";
import Board from "../Helpers/Board";
import Tasklist from "../Helpers/Tasklist";

it("action setActiveBoard", () => {
  const board = new Board({id: "1", name: "board name"});
  const action = setActiveBoard(board);
  expect(action).toEqual({
    type: SET_ACTIVE_BOARD,
    board: board
  });
});

it("action addActiveBoardTasklists", () => {
  const dbTask1 = {id: 1, name: "task1"};
  const dbTask2 = { id: 2, name: "task2" };
  const dbTasklistData = {id: 2, name: "tasklist2"};
  const dbTasklist = {tasklist: dbTasklistData, tasks: [ dbTask1, dbTask2 ]};
  const action = addActiveBoardTasklists([ dbTasklist ]);
  expect(action.type).toEqual(ADD_ACTIVE_BOARD_TASKLISTS);
  expect(action.tasklists).toEqual([ dbTasklist ]);
});
