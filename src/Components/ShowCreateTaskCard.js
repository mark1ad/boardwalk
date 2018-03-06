import { connect } from "react-redux";

import Card from "./Card";
import { openCreateTask } from "../Actions/CreateTaskActions";

const mapStateToProps = () => {
  return {
    id: 0, // not used
    name: "Create new task...",
    class: "create-task-card"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let submit = () => {
    dispatch(openCreateTask(ownProps.tasklist_id));
  };

  return {
    submit: submit
  };
};

const ShowCreateTaskCard = connect(
  mapStateToProps,
  mapDispatchToProps
) (Card);

export default ShowCreateTaskCard;
