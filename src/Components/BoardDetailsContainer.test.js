import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import BoardDetailsContainer from './BoardDetailsContainer';
import Board from '../Helpers/Board';
import Tasklist from '../Helpers/Tasklist';

let mockGetBoardInfoFunc;
const board = new Board({id: 1, name: "name"});
const tasklist = new Tasklist({id: 1, name: "tasklist1"});
board.tasklists = [ tasklist ];

beforeEach(() => {
  mockGetBoardInfoFunc = jest.fn();
})

it('renders without crashing', () => {
  shallow(<BoardDetailsContainer
    ActiveBoard={board}
    getBoardInfo={mockGetBoardInfoFunc} />);
})

it('renders correctly', () => {
  const details = shallow(<BoardDetailsContainer
    ActiveBoard={board}
    getBoardInfo={mockGetBoardInfoFunc} />);
  expect(details).toMatchSnapshot();
})
