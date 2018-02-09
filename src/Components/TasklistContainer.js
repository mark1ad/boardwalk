import React from 'react';

const TasklistContainer = (props) => {
  return (
    <div className="tasklist-container">
      {props.tasklist.name}
    </div>
  )
}

export default TasklistContainer;
