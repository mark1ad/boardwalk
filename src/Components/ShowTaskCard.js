// ShowTaskCard
//
// Displays the name of a task
//
// Attributes:
//  task: object, required

import { connect } from "react-redux";

import Card from "./Card/Card";

const mapStateToProps = (state, props) => {
  return {id: props.task.id, name: props.task.name, class: "task-card"};
};

const mapDispatchToProps = () => {
  let submit = () => {

  };
  return {submit: submit};
};

const ShowTaskCard = connect(
  mapStateToProps,
  mapDispatchToProps
) (Card);

export default ShowTaskCard;
