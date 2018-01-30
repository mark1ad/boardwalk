// BoardCard
//
// Displays the name of a board. Used by BoardList
//
// Attributes:
//  name: string, required.

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class BoardCard extends Component {
  render() {
    return (
      <div className="board-card">
        {this.props.name}
      </div>
    )
  }
}

BoardCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default BoardCard;
