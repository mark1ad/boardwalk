import {
  OPEN_CREATE_TASK,
  CLOSE_CREATE_TASK
} from "../Actions/ActionTypes";

const initState = {
  isTaskOpen: false
};

export const CreateTask = (state = initState, action) => {
  switch (action.type) {
    case OPEN_CREATE_TASK:
      return {
        ...state,
        isTaskOpen: true,
        tasklist_id: action.tasklist_id
      };
    case CLOSE_CREATE_TASK:
      return {
        ...state,
        isTaskOpen: false,
      };
    default:
      return state;
  }
};
