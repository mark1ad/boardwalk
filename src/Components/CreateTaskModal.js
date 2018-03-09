import React, { Component } from "react";
import { PropTypes } from "prop-types";

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
  show: PropTypes.bool.isRequired,
  tasklist_id: PropTypes.number
};

export default CreateTaskModal;
