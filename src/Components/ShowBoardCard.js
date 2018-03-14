// ShowBoardCard
//
// Displays the name of a board
//
// Attributes:
//  board: object, required.

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


import Card from "./Card/Card";

const mapStateToProps = (state, props) => {
  return {id: props.id, name: props.name, class: "board-card"};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let submit = () => {
    ownProps.history.push("/board/" + ownProps.id);
  };
  return {submit: submit};
};

const ShowBoardCard = connect(
  mapStateToProps,
  mapDispatchToProps
) (Card);

export default withRouter(ShowBoardCard);
