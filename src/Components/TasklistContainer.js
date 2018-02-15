import React from "react";
import { PropTypes } from "prop-types";

const TasklistContainer = (props) => {
  return (
    <div className="tasklist-container">
      <div className="tasklist-container-name">
        {props.tasklist.name}
      </div>
    </div>
  );
};

TasklistContainer.propTypes = {
  tasklist: PropTypes.object.isRequired
};

export default TasklistContainer;
