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

  const cancel = e => {
    e.preventDefault();
  }

  return (
    <div className="create-board-card" onClick={showForm}>
      Create New Board...

      <form onSubmit={submit} onCancel={cancel}>
        <input type="text"
          className="form-control"
          ref={input => _name = input}
          placeholder="Board Name" />
        <div className="row button-row">
        <button className="btn" type="cancel">Cancel</button>
        <button className="btn btn-primary" type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateBoardCard;
