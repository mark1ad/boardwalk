import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Card from './Card';

const mockSubmitFunction = jest.fn();

it('renders without crashing', () => {
  const id = 1;
  const submit = () => {};
  const div = document.createElement('div');
  ReactDom.render(<Card name="name" id={id} submit={submit} class="class" />, div);
})

it("renders correctly", () => {
  const id = 1;
  const submit = () => {};
  const tree = renderer
    .create(<Card name="name" id={id} submit={submit} class="class" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

it("should call the mock sumbit function", () => {
  const id = 1;
  const card = shallow(<Card name="name" id={id} submit={mockSubmitFunction} class="test-card" />);
  card.simulate('click', {preventDefault() {}})
  expect(mockSubmitFunction.mock.calls.length).toBe(1);
})
