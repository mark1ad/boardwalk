import { connect } from 'react-redux';

import BoardDetailsContainer from './BoardDetailsContainer';
import Board from '../Helpers/Board';
import { setActiveBoard } from '../Actions/ActiveBoardActions';

const mapStateToProps = (state, props) => {
  return (Object)(state.ActiveBoard);
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let getBoardInfo = () => {
    // Clear ActiveBoard
    dispatch(setActiveBoard(new Board({name: "", id:""})))

    // Get board
    global.axiosInstance.get("boards/" + ownProps.match.params['id'])
    .then(res => {
      const board = new Board(res.data);
      dispatch(setActiveBoard(board));
    })
    .catch((response) => {
      // TODO: handle failure
      console.log("ShowCreateBoardContainer get board fail\n", response);
    })
  }

  return {getBoardInfo: getBoardInfo}
}

const ShowCreateBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (BoardDetailsContainer);

export default ShowCreateBoardContainer;
