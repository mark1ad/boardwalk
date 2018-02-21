import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';

import CreateTaskModal from "./CreateTaskModal";

it("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreateTaskModal show={true} />, div);
})

it('renders correctly with show==true', () => {
  const tree = renderer
    .create(<CreateTaskModal show={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders correctly with show == false', () => {
  const tree = renderer
    .create(<CreateTaskModal show={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
