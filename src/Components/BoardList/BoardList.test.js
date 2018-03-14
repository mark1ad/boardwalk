import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BoardList from './BoardList';
import Board from '../../Helpers/Board';

let mockGetBoardsFunc;
const board1 = new Board({id: 1, name: "board1"});
const board2 = new Board({id: 2, name: "board2"});

beforeEach(() => {
  mockGetBoardsFunc = jest.fn();
})

it('renders without crashing', () => {
  const boards = [];
  shallow(<BoardList getBoards={mockGetBoardsFunc} Boards={boards}  />);
})

it('renders correctly', () => {
  const boards = [ board1, board2 ];
  const boardList = shallow(<BoardList
    getBoards={mockGetBoardsFunc}
    Boards={boards} />);
  expect(boardList).toMatchSnapshot();
})

it("should call mock getBoards functions", () => {
  const boards = [ board1, board2 ];
  const boardList = shallow(<BoardList
    getBoards={mockGetBoardsFunc}
    Boards={boards} />);
  expect(mockGetBoardsFunc.mock.calls.length).toBe(1);
})
