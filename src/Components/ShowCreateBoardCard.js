import { connect } from 'react-redux';

import CreateBoardCard from './CreateBoardCard';
import { newBoard } from '../Actions/BoardActions';

const mapDispatchToProps = dispatch => {
  let createBoard = (name) => {
    global.axiosInstance.post("/boards", { name: name})
    .then(res=> {
      const board = res.data;
      global.store.dispatch(newBoard(board))
    })
    .catch((response) => {
      // TODO: handle failure
      console.log("new beer fail ", response);
    })
  }

  return {
    createBoard: createBoard
  }
}

const ShowCreateBoardCard = connect(
  null,
  mapDispatchToProps
) (CreateBoardCard);

export default ShowCreateBoardCard;
