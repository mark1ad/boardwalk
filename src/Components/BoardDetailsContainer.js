//  BoardDetailsContainer
//
// Displays a board's lists

import React, { Component   } from 'react';

import ShowBoardDetailsHeader from './ShowBoardDetailsHeader';
import ShowTasklistContainer from './ShowTasklistContainer';

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
    )
  }
}

export default BoardDetailsContainer;
