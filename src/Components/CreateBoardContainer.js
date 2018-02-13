import React from "react";
import PropTypes from "prop-types";
import ShowCreateBoardCard from "./ShowCreateBoardCard";
import ShowActiveCreateBoardCard from "./ShowActiveCreateBoardCard";

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
  isBoardOpen: PropTypes.bool.isRequired
};

export default CreateBoardContainer;
