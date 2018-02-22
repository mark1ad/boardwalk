import {
  OPEN_CREATE_TASK,
  CLOSE_CREATE_TASK
} from "./ActionTypes";

export const openCreateTask = (tasklist_id) => ({
  type: OPEN_CREATE_TASK,
  tasklist_id: tasklist_id
});

export const closeCreateTask = () => ({
  type: CLOSE_CREATE_TASK
});
