// ShowBoardCard
//
// Displays the name of a board
//
// Attributes:
//  board: object, required.

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import BoardCard from './BoardCard';

const mapStateToProps = (state, props) => {
  return {id: props.id, name: props.name};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let submit = () => {
    ownProps.history.push('/board/' + ownProps.id + '/' + ownProps.name);
  }
  return {submit: submit}
}

const ShowBoardCard = connect(
  mapStateToProps,
  mapDispatchToProps
) (BoardCard);

export default withRouter(ShowBoardCard);
