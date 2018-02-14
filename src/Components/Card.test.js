import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

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
