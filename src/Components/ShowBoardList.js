import { connect } from 'react-redux';

import BoardList from './BoardList';
import Board from '../Helpers/Board';

const mapStateToProps = (state, props) => {
  const backlog = new Board("1", "Backlog");
  const userStory = new Board("2", "User Stories");
  const completed = new Board("3", "Completed");
  const board4 = new Board("4", "Board 4");
  const board5 = new Board("5", "Board 5");
  return {boards: [backlog, userStory, completed, board4, board5]};
}

const ShowBoardList = connect(
  mapStateToProps,
  null
) (BoardList);

export default ShowBoardList;
