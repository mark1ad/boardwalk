import React, { Component } from "react";
import { PropTypes } from "prop-types";

class CreateTaskModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return(
      <div>
        <h1>Hi!</h1>
      </div>
    );
  }
}

CreateTaskModal.propTypes = {
  show: PropTypes.bool.isRequired
};

export default CreateTaskModal;
