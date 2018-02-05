// BoardCard
//
// Displays the name of a board. Used by BoardList
//
// Attributes:
//  name: string, required.

import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

const BoardCard = (props) => {
  const submit = e => {
    e.preventDefault();
    props.history.push('/board/' + props.name);
  }

  return (
    <div className="board-card" onClick={submit}>
      {props.name}
    </div>
  )
}

BoardCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default withRouter(BoardCard);
