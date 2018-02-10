import {
  setActiveBoard,
  addActiveBoardTasklists
} from './ActiveBoardActions';
import {
  SET_ACTIVE_BOARD,
  ADD_ACTIVE_BOARD_TASKLISTS
} from './ActionTypes';
import Board from '../Helpers/Board';
import Tasklist from '../Helpers/Tasklist';

it('action setActiveBoard', () => {
  const board = new Board({id: "1", name: "board name"});
  const action = setActiveBoard(board);
  expect(action).toEqual({
    type: SET_ACTIVE_BOARD,
    board: board
  })
})

it('action addActiveBoardTasklists', () => {
  const task1 = new Tasklist({id: "1", name: "task1"});
  const task2 = new Tasklist({id: "2", name: "task2"});
  const tasks = [task1, task2];
  const action = addActiveBoardTasklists(tasks);
  expect(action).toEqual({
    type: ADD_ACTIVE_BOARD_TASKLISTS,
    tasklists: tasks
  });
})
