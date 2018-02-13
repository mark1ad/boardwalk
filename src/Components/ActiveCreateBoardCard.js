// ActiveCreateBoardCard
//

import React from "react";
import { PropTypes } from "prop-types";

const ActiveCreateBoardCard = ({placeholder, submitBoard, cancelNewBoard}) => {
  let _name;

  const submit = e => {
    e.preventDefault();
    submitBoard(_name.value);
    cancelNewBoard();
    _name.value = "";
  };

  const cancel = e => {
    e.preventDefault();
    cancelNewBoard();
  };

  return (
    <div className="create-board-card">
      <form onSubmit={submit}>
        <input type="text"
          className="form-control"
          ref={input => _name = input}
          placeholder={placeholder}
        />
        <div className="row button-row">
          <button className="btn btn-primary" type="submit" onClick={submit}>Create</button>
          <button className="btn" type="cancel" onClick={cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

ActiveCreateBoardCard.propTypes = {
  placeholder: PropTypes.string.isRequired,
  submitBoard: PropTypes.func.isRequired,
  cancelNewBoard: PropTypes.func.isRequired
};

export default ActiveCreateBoardCard;
