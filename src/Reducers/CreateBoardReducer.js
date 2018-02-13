import { OPEN_CREATE_BOARD, CLOSE_CREATE_BOARD } from "../Actions/ActionTypes";

const initState = {
  isBoardOpen: false
};

export const CreateBoard = (state = initState, action) => {
  switch (action.type) {
    case OPEN_CREATE_BOARD:
      return {
        ...state,
        isBoardOpen: true
      };
    case CLOSE_CREATE_BOARD:
      return {
        ...state,
        isBoardOpen: false
      };
    default:
      return state;
  }
};
