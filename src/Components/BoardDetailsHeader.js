import React from "react";
import { PropTypes } from "prop-types";

const BoardDetailsHeader = ({name}) => {
  return (
    <div className="board-details-header">
      <span>{name}</span>
    </div>
  );
};

BoardDetailsHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default BoardDetailsHeader;
