import { connect } from 'react-redux';

import CreateBoardContainer from './CreateBoardContainer';

const mapStateToProps = (state, props) => {
  return state.CreateBoard;
}

const ShowCreateBoardContainer = connect(
  mapStateToProps,
  null
) (CreateBoardContainer);

export default ShowCreateBoardContainer;
