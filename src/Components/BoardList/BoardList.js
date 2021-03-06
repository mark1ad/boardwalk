// BoardList
//
// Displays a list of boards
//
// Attributes;
//  boards: array, required. List of boards to display

import React, { Component } from "react";
import { PropTypes } from "prop-types";
import ShowCreateBoardContainer from "../ShowCreateBoardContainer";

import ShowBoardCard from "../ShowBoardCard";

/**
 * Displays the list of all boards.
 */
class BoardList extends Component {
  componentWillMount() {
    this.props.getBoards();
  }

  render() {
    return (
      <div className="container-fluid board-list">
        <div className="row">
          { this.props.Boards.map(board =>
            (
              <div key={board.id} className="">
                <ShowBoardCard id={board.id} name={board.name} />
              </div>
            )
          )}
          <ShowCreateBoardContainer />
        </div>
      </div>
    );
  }
}

BoardList.propTypes = {
  /** List of boards to display */
  Boards: PropTypes.array.isRequired,
  /** Populates Boards in componentWillMount */
  getBoards: PropTypes.func.isRequired
};

export default BoardList;
