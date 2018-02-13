import {
  OPEN_CREATE_BOARD,
  CLOSE_CREATE_BOARD
} from "./ActionTypes";
import {
  openCreateBoard,
  closeCreateBoard
} from "./CreateBoardActions";

it("action openCreateBoard", () => {
  const action = openCreateBoard();
  expect(action).toEqual({type: OPEN_CREATE_BOARD});
});

it("action closeCreateBoard", () => {
  const action = closeCreateBoard();
  expect(action).toEqual({type: CLOSE_CREATE_BOARD});
});
