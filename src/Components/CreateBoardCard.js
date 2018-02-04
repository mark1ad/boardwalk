// CreateBoardCard
//
// Place holder on list of boards page. When clicked opens create board form

import React from 'react';

const CreateBoardCard = ({createBoard}) => {
  const showForm = e => {
    e.preventDefault();
    createBoard();
  }

  return (
    <div className="create-board-card" onClick={showForm}>
      Create New Board...
    </div>
  )
}

export default CreateBoardCard;
