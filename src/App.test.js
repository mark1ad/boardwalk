import React from 'react';
import {shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
    shallow(<App />);
})

it("renders correctly", () => {
  const tree = shallow(<App />);
  expect(tree).toMatchSnapshot();
})
