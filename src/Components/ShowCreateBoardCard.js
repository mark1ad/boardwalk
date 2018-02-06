import { connect } from 'react-redux';

import Card from './Card';
import { openCreateBoard } from '../Actions/CreateBoardActions';

const mapStateToProps = (state, props) => {
  return {
    id: 0, // not used
    name: "Create New Board...",
    class: "create-board-card"
  };
}
const mapDispatchToProps = dispatch => {
  let submit = () => {
    global.store.dispatch(openCreateBoard());
  }

  return {
    submit: submit
  }
}

const ShowCreateBoardCard = connect(
  mapStateToProps,
  mapDispatchToProps
) (Card);

export default ShowCreateBoardCard;
