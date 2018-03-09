import { connect } from "react-redux";

import ActiveCreateBoardCard
  from "./ActiveCreateBoardCard/ActiveCreateBoardCard";
import { newBoard } from "../Actions/BoardActions";
import { closeCreateBoard } from "../Actions/CreateBoardActions";

const mapStateToProps = () => {
  return {placeholder: "Board Name"};
};

const mapDispatchToProps = dispatch => {
  let submitBoard = (name) => {
    global.axiosInstance.post("/boards", { name: name})
      .then(res=> {
        const board = res.data;
        dispatch(newBoard(board));
      })
      .catch((response) => {
        // TODO: handle failure
        /* eslint-disable no-console */
        console.log("new board fail ", response);
        /* eslint-enable no-console */
      });
  };

  let cancelNewBoard = () => {
    global.store.dispatch(closeCreateBoard());
  };

  return {
    submitBoard: submitBoard,
    cancelNewBoard: cancelNewBoard
  };
};

const ShowCreateBoardCard = connect(
  mapStateToProps,
  mapDispatchToProps
) (ActiveCreateBoardCard);

export default ShowCreateBoardCard;
