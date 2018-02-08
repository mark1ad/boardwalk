import { connect } from 'react-redux';

import BoardList from './BoardList';
import { setBoards } from '../Actions/BoardActions';

const mapStateToProps = (state, props) => {
  return {Boards: state.Boards};
}

const mapDispatchToProps = (dispatch) => {
  let getBoards = () => {
    // Clear board list
    dispatch(setBoards([]));

    // Get boards
    global.axiosInstance.get("boards")
    .then(res => {
      const boards = res.data;
      dispatch(setBoards(boards));
    })
    .catch((response) => {
      // TODO: Handle failure
      console.log("ShowBoardList get boards fail\n", response);
    })
  }

  return {getBoards: getBoards}
}

const ShowBoardList = connect(
  mapStateToProps,
  mapDispatchToProps
) (BoardList);

export default ShowBoardList;
