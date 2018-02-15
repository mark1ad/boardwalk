import { setBoards, newBoard } from "./BoardActions";
import { SET_BOARDS, NEW_BOARD } from "./ActionTypes";
import Board from "../Helpers/Board";

it("action setBoards empty list", () => {
  const action = setBoards([]);
  expect(action).toEqual({
    type: SET_BOARDS,
    boards: []
  });
});

it("action setBoards", () => {
  const board = new Board("1", "board name");
  const action = setBoards([board]);
  expect(action).toEqual({
    type: SET_BOARDS,
    boards: [ board ]
  });
});

it("action newBoard", () => {
  const board = new Board("3", "board3");
  const action = newBoard(board);
  expect(action).toEqual({
    type: NEW_BOARD,
    board: board
  });
});
