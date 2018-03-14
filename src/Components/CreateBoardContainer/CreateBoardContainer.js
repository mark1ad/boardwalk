import React from "react";
import PropTypes from "prop-types";
import ShowCreateBoardCard from "../ShowCreateBoardCard";
import ShowActiveCreateBoardCard from "../ShowActiveCreateBoardCard";

/**
 * Displays either ActiveCreateBoardCard or CreateBoardCard.
 */
const CreateBoardContainer = (props) => {
  return (
    <div>
      { props.isBoardOpen ?
        <ShowActiveCreateBoardCard /> :
        <ShowCreateBoardCard />}
    </div>
  );
};

CreateBoardContainer.propTypes = {
  /** If true ActiveCreateBoardCard is displayed. */
  isBoardOpen: PropTypes.bool.isRequired
};

export default CreateBoardContainer;
