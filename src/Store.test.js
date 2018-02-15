import Store from './Store';
import {
  setBoards,
  newBoard
} from './Actions/BoardActions';
import {
  setActiveBoard,
  addActiveBoardTasklists
} from './Actions/ActiveBoardActions';
import {
  openCreateBoard,
  closeCreateBoard
} from './Actions/CreateBoardActions';
import Board from './Helpers/Board';
import Tasklist from './Helpers/Tasklist';

let store;
let board1 = new Board( {id: 1, name: "board1"});
let board2 = new Board( {id: 2, name: "board2"});
let tasklist1 = new Tasklist({id: 1, name: "tasklist1"});
let tasklist2 = new Tasklist({id: 2, name: "tasklist2"});

beforeEach(() => {
  store = Store();
})

//******************
// Test Boards
it("should add a board", () => {
  store.dispatch(newBoard(board1));
  expect(store.getState().Boards.length).toBe(1);
  expect(store.getState().Boards[0]).toEqual(board1);
})

it("should set list of boards", () => {
  const boardList = [ board1, board2 ];
  store.dispatch(setBoards(boardList));
  const state = store.getState();
  expect(state.Boards.length).toBe(boardList.length);
  expect(state.Boards).toEqual(boardList);
})

//***********************
// Test ActiveBoard
it("should set active board", () => {
  store.dispatch(setActiveBoard(board1));
  expect(store.getState().ActiveBoard).toEqual(board1);
})

it("should add tasklists to ActiveBoard", () => {
  const tasklists = [ tasklist1, tasklist2 ];
  store.dispatch(addActiveBoardTasklists(tasklists));
  expect(store.getState().ActiveBoard.tasklists).toEqual(tasklists);
})

//*************************
// Test CreateBoard
it("should set isBoardOpen to true", () => {
  store.dispatch(openCreateBoard());
  expect(store.getState().CreateBoard.isBoardOpen).toEqual(true);
})

it("should set isBoardOpen to false", () => {
  store.dispatch(openCreateBoard()); // First set it true
  store.dispatch(closeCreateBoard());
  expect(store.getState().CreateBoard.isBoardOpen).toEqual(false);
})
