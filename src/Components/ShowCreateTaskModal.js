import { connect } from "react-redux";

import CreateTaskModal from "./CreateTaskModal";

const mapStateToProps = (state) => {
  return {
    show: state.CreateTask.isTaskOpen,
    tasklist_id: state.CreateTask.tasklist_id
  };
}

const ShowCreateTaskModal = connect(
  mapStateToProps,
  null
) (CreateTaskModal);

export default ShowCreateTaskModal;
