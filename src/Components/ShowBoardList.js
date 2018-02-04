import { connect } from 'react-redux';

import BoardList from './BoardList';
import { setBoards } from '../Actions/BoardActions';

const mapStateToProps = (state, props) => {

  if (state.Boards === undefined || state.Boards.length === 0) {
    global.axiosInstance.get("boards")
    .then(res => {
      const boards = res.data;
      global.store.dispatch(setBoards(boards));
    })
    .catch((response) => {
      // TODO: Handle failure
      console.log("ShowBoardList get boards fail\n", response);
    })
  }

  return state;
}

const ShowBoardList = connect(
  mapStateToProps,
  null
) (BoardList);

export default ShowBoardList;
