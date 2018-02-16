import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Tasklist from '../Helpers/Tasklist';
import Task from '../Helpers/Task';
import TasklistContainer from './TasklistContainer';

let tasklist;
const task1 = new Task({id: 1, name: "task1"});
const task2 = new Task({id: 2, name: "task2"});
const tasks = [ task1, task2 ];

beforeEach(() => {
  tasklist = new Tasklist({id: 1, name: "name"});
})

it('renders without crashing', () => {
  shallow(<TasklistContainer tasklist={tasklist} />);
})

it("renders correctly with no tasks in tasklist", () => {
  const tree = shallow(<TasklistContainer tasklist={tasklist} />);
  expect(tree).toMatchSnapshot();
})

it("renders correctly with 2 tasks in tasklist", () => {
  tasklist.tasks = tasks;
  const tree = shallow(<TasklistContainer tasklist={tasklist} />);
  expect(tree).toMatchSnapshot();
})
