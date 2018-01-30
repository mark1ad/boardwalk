import { connect } from 'react-redux';
import Board from '../Helpers/Board';

import BoardDetails from './BoardDetails';

const mapStateToProps = (state, props) => {
  return { board: new Board("Backlog")}
}

const ShowBoardDetails = connect(
  mapStateToProps,
  null
) (BoardDetails);

export default ShowBoardDetails;
