import { connect } from "react-redux";

import CreateBoardContainer from "./CreateBoardContainer/CreateBoardContainer";

const mapStateToProps = (state) => {
  return state.CreateBoard;
};

const ShowCreateBoardContainer = connect(
  mapStateToProps,
  null
) (CreateBoardContainer);

export default ShowCreateBoardContainer;
