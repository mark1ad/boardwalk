// CreateBoardCard
//

import React from 'react';

const CreateBoardCard = ({createBoard}) => {
  let _name;

  const showForm = e => {
    // e.preventDefault();
  }

  const submit = e => {
    e.preventDefault();
    createBoard(_name.value);
    _name.value = "";
  }

  return (
    <div className="create-board-card" onClick={showForm}>
      Create New Board...

      <form onSubmit={submit}>
        <input type="text"
          className="form-control"
          ref={input => _name = input}
          placeholder="Board Name" />
        <button className="btn btn-default" type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateBoardCard;
