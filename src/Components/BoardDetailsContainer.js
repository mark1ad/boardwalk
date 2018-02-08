//  BoardDetailsContainer
//
// Displays a board's lists

import React, { Component   } from 'react';

import ShowBoardDetailsHeader from './ShowBoardDetailsHeader';

class BoardDetailsContainer extends Component {
  componentWillMount() {
    this.props.getBoardInfo();
  }

  render() {
    const { name } = this.props.ActiveBoard;

    return (
      <div className="board-details-container">
        <ShowBoardDetailsHeader name={name} />
      </div>
    )
  }
}

export default BoardDetailsContainer;
