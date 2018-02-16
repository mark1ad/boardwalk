import React from "react";
import { PropTypes } from "prop-types";
import ShowTaskCard from './ShowTaskCard';

const TasklistContainer = (props) => {
  return (
    <div className="tasklist-container">
      <div className="tasklist-container-name">
        {props.tasklist.name}
      </div>
      { props.tasklist.tasks.map(task =>
        (
          <ShowTaskCard key={task.id} task={task} />
        )
      )}
    </div>
  );
};

TasklistContainer.propTypes = {
  tasklist: PropTypes.object.isRequired
};

export default TasklistContainer;
