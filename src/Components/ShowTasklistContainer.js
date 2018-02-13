import { connect } from "react-redux";

import TasklistContainer from "./TasklistContainer";

const mapStateToProps = (state) => {
  return {Tasklist: state.Tasklist};
};

const ShowTasklistContainer = connect(
  mapStateToProps,
  null
) (TasklistContainer);

export default ShowTasklistContainer;
