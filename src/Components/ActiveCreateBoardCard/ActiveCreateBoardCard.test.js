import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ActiveCreateBoardCard from './ActiveCreateBoardCard';

let mockSubmitFunction;
let mockCancelFunction;

beforeEach(() => {
  mockSubmitFunction = jest.fn();
  mockCancelFunction = jest.fn();
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<ActiveCreateBoardCard
    placeholder="placeholder"
    submitBoard={mockSubmitFunction}
    cancelNewBoard={mockCancelFunction}
    />, div);
})

it('renders correctly', () => {
  const tree = renderer
    .create(<ActiveCreateBoardCard
      placeholder="placeholder"
      submitBoard={mockSubmitFunction}
      cancelNewBoard={mockCancelFunction}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

it("should call mock submit function", () => {
  const card = mount(<ActiveCreateBoardCard
    placeholder="placeholder"
    submitBoard={mockSubmitFunction}
    cancelNewBoard={mockCancelFunction}
    />);
  card.find("form").simulate('submit', {preventDefault() {}});
  expect(mockSubmitFunction.mock.calls.length).toBe(1);
})

it("should call mock cancel function", () => {
  const card = mount(<ActiveCreateBoardCard
    placeholder="placeholder"
    submitBoard={mockSubmitFunction}
    cancelNewBoard={mockCancelFunction}
    />);
  card.find(".cancel-btn").simulate('click', {preventDefault() {}});
  expect(mockCancelFunction.mock.calls.length).toBe(1);
  expect(mockSubmitFunction.mock.calls.length).toBe(0);
})
