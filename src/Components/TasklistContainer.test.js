import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Tasklist from '../Helpers/Tasklist';
import TasklistContainer from './TasklistContainer';

const tasklist = new Tasklist({id: 1, name: "name"});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<TasklistContainer tasklist={tasklist} />, div);
})

it("renders correctly", () => {
  const id = 1;
  const submit = () => {};
  const tree = renderer
    .create(<TasklistContainer tasklist={tasklist}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
