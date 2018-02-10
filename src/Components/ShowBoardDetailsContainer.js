import { connect } from 'react-redux';

import BoardDetailsContainer from './BoardDetailsContainer';
import Board from '../Helpers/Board';
import {
  setActiveBoard,
  addActiveBoardTasklists
} from '../Actions/ActiveBoardActions';

const mapStateToProps = (state, props) => {
  return {ActiveBoard:state.ActiveBoard};
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

      // Get board's tasklists
      global.axiosInstance.get("boards/" + ownProps.match.params['id']
          + "/tasklists")
      .then(res => {
        dispatch(addActiveBoardTasklists(res.data));
      })
      .catch((response) => {
        // TODO: handle failure
        console.log("ShowBoardDetailsContainer get tasklists fail\n", response);
      })
    })
    .catch((response) => {
      // TODO: handle failure
      console.log("ShowBoardDetailsContainer get board fail\n", response);
    })
  }

  return {getBoardInfo: getBoardInfo}
}

const ShowBoardDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (BoardDetailsContainer);

export default ShowBoardDetailsContainer;
