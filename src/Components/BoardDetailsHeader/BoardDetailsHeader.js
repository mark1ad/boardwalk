import React from "react";
import { PropTypes } from "prop-types";

/**
 * Header for BoardDetailsContainer component.
 * Displays board's className */
const BoardDetailsHeader = ({name}) => {
  return (
    <div className="board-details-header">
      <span>{name}</span>
    </div>
  );
};

BoardDetailsHeader.propTypes = {
  /** Name of board. */
  name: PropTypes.string.isRequired
};

export default BoardDetailsHeader;
