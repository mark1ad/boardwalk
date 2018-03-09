// ActiveCreateBoardCard
//

import React from "react";
import { PropTypes } from "prop-types";

/**
 * Form for creating a new board.
 */
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
          <button className="btn cancel-btn" type="cancel" onClick={cancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

ActiveCreateBoardCard.propTypes = {
  /** Placeholder for name text field */
  placeholder: PropTypes.string.isRequired,
  /** Callback to create the new board. */
  submitBoard: PropTypes.func.isRequired,
  /** Callback for cancel button */
  cancelNewBoard: PropTypes.func.isRequired
};

export default ActiveCreateBoardCard;
