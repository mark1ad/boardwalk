import { connect } from 'react-redux';

import ActiveCreateBoardCard from './ActiveCreateBoardCard';
import { newBoard } from '../Actions/BoardActions';
import { closeCreateBoard } from '../Actions/CreateBoardActions';

const mapDispatchToProps = dispatch => {
  let submitBoard = (name) => {
    global.axiosInstance.post("/boards", { name: name})
    .then(res=> {
      const board = res.data;
      global.store.dispatch(newBoard(board));
    })
    .catch((response) => {
      // TODO: handle failure
      console.log("new board fail ", response);
    })
  }

  let cancelNewBoard = () => {
    global.store.dispatch(closeCreateBoard());
  }

  return {
    submitBoard: submitBoard,
    cancelNewBoard: cancelNewBoard
  }
}

const ShowCreateBoardCard = connect(
  null,
  mapDispatchToProps
) (ActiveCreateBoardCard);

export default ShowCreateBoardCard;
