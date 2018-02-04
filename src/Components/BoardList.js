// BoardList
//
// Displays a list of boards
//
// Attributes;
//  boards: array, required. List of boards to display

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ShowCreateBoardContainer from './ShowCreateBoardContainer';

import BoardCard from './BoardCard';

class BoardList extends Component {
  render() {
    return (
      <div className="container-fluid board-list">
        <div className="row">
          { this.props.Boards.map(board =>
            <div key={board.id} className="">
              <BoardCard id={board.id} name={board.name} />
            </div>
          )}
          <ShowCreateBoardContainer />
        </div>
      </div>
    )
  }
}

BoardList.propTypes = {
  Boards: PropTypes.array.isRequired
}

export default BoardList;
