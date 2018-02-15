import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import CreateBoardContainer from './CreateBoardContainer';

it('renders without crashing', () => {
  shallow(<CreateBoardContainer isBoardOpen={false} />);
})

it('renders correctly with isBoardOpen == false', () => {
  const tree = shallow(<CreateBoardContainer isBoardOpen={false} />);
  expect(tree).toMatchSnapshot();
})

it('renders correctly with isBoardOpen == true', () => {
  const tree = shallow(<CreateBoardContainer isBoardOpen={true} />);
  expect(tree).toMatchSnapshot();
})
