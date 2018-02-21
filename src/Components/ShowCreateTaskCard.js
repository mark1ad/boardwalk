import { connect } from "react-redux";

import Card from "./Card";

const mapStateToProps = () => {
  return {
    id: 0, // not used
    name: "Create new task...",
    class: "create-task-card"
  };
};

const mapDispatchToProps = (dispatch) => {
  let submit = () => {
    console.log("create task card submit");
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
