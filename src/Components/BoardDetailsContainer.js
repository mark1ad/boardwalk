//  BoardDetailsContainer
//
// Displays a board's lists

import React from 'react';

import ShowBoardDetailsHeader from './ShowBoardDetailsHeader';

const BoardDetailsContainer = ({name}) => {
    return (
      <div className="board-details-container">
        <ShowBoardDetailsHeader name={name} />
      </div>
    )
}

export default BoardDetailsContainer;
