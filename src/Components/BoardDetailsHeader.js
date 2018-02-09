import React from 'react';

const BoardDetailsHeader = ({name}) => {
  return (
    <div className="board-details-header">
      <span>{name}</span>
    </div>
  )
}

export default BoardDetailsHeader;
