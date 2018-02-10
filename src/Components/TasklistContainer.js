import React from 'react';

const TasklistContainer = (props) => {
  return (
    <div className="tasklist-container">
      <div className="tasklist-container-name">
        {props.tasklist.name}
      </div>
    </div>
  )
}

export default TasklistContainer;
