//  BoardDetailsContainer
//
// Displays a board's lists

import React, { Component   } from "react";
import { PropTypes } from "prop-types";

import ShowBoardDetailsHeader from "../ShowBoardDetailsHeader";
import ShowTasklistContainer from "../ShowTasklistContainer";

/**
 * Displays a board's tasklists.
 */
class BoardDetailsContainer extends Component {
  componentWillMount() {
    this.props.getBoardInfo();
  }

  render() {
    const { name, tasklists } = this.props.ActiveBoard;

    return (
      <div className="board-details-container">
        <ShowBoardDetailsHeader name={name} />

        <div className="board-details-tasklists">
          { tasklists.map(tasklist =>
            <ShowTasklistContainer key={tasklist.id} tasklist={tasklist} />
          )}
        </div>
      </div>
    );
  }
}

BoardDetailsContainer.propTypes = {
  /** Method that populates ActiveBoard when component will mount. */
  getBoardInfo: PropTypes.func.isRequired,
  /** Board to display */
  ActiveBoard: PropTypes.object.isRequired
};

export default BoardDetailsContainer;
