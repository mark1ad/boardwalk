import React from 'react';



const BoardDetails = (props) => {
  return (
    <div className="board">
      <div className="board-name">
        {props.board.name}
      </div>
    </div>
  )
}

export default BoardDetails;
