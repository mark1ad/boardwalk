import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';

import CreateTaskModal from "./CreateTaskModal";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreateTaskModal show={true} tasklist_id={1} />, div);
})

it('renders correctly with show==true', () => {
  const tree = renderer
    .create(<CreateTaskModal show={true} tasklist_id={1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders correctly with show == false', () => {
  const tree = renderer
    .create(<CreateTaskModal show={false} tasklist_id={1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
