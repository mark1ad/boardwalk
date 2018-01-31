// ShowBoardCard
//
// Displays the name of a board
//
// Attributes:
//  board: object, required.

import { connect } from 'react-redux';

import BoardCard from './BoardCard';

const mapStateToProps = (state, props) => {
  console.log("state ", state);
  console.log("props ", props);
}

const ShowBoardCard = connect(
  mapStateToProps,
  null
) (BoardCard);

export default ShowBoardCard;
