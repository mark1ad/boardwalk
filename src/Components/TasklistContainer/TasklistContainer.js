import React from "react";
import { PropTypes } from "prop-types";
import ShowTaskCard from "../ShowTaskCard";
import ShowCreateTaskCard from "../ShowCreateTaskCard";

/**
 * Displays the tasks in a tasklist.
 */
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
      <ShowCreateTaskCard tasklist_id={props.tasklist.id} />
    </div>
  );
};

TasklistContainer.propTypes = {
  /** List of tasks */
  tasklist: PropTypes.object.isRequired
};

export default TasklistContainer;
