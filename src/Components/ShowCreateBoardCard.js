import { connect } from 'react-redux';

import CreateBoardCard from './CreateBoardCard';
import { openCreateBoard } from '../Actions/CreateBoardActions';

const mapDispatchToProps = dispatch => {
  let createBoard = (name) => {
    global.store.dispatch(openCreateBoard());
  }

  return {
    createBoard: createBoard
  }
}

const ShowCreateBoardCard = connect(
  null,
  mapDispatchToProps
) (CreateBoardCard);

export default ShowCreateBoardCard;
