import React, { Component } from "react";
import { PropTypes } from "prop-types";

/**
 * Modal form for entering information for a new task
 */
class CreateTaskModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return(
      <div className="create-task-modal">
        <div className="modal-style">
          <h1>Hi!</h1>
          <h2>Tasklist: {this.props.tasklist_id}</h2>
        </div>
      </div>
    );
  }
}

CreateTaskModal.propTypes = {
  /** If true, modal is displayed */
  show: PropTypes.bool.isRequired,
  /** ID of tasklist that new task will be in. */
  tasklist_id: PropTypes.number
};

export default CreateTaskModal;
