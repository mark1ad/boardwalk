import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import BoardDetailsHeader from './BoardDetailsHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<BoardDetailsHeader name="board name" />, div);
})

it('renders correctly', () => {
  const tree = renderer
    .create(<BoardDetailsHeader name="board name" />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})
