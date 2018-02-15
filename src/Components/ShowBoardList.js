import { connect } from "react-redux";

import BoardList from "./BoardList";
import { setBoards } from "../Actions/BoardActions";

const mapStateToProps = (state) => {
  return {Boards: state.Boards};
};

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
        /* eslint-disable no-console */
        console.log("ShowBoardList get boards fail\n", response);
        /* eslint-enable no-console */
      });
  };

  return {getBoards: getBoards};
};

const ShowBoardList = connect(
  mapStateToProps,
  mapDispatchToProps
) (BoardList);

export default ShowBoardList;
