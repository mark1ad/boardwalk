import {
  OPEN_CREATE_TASK,
  CLOSE_CREATE_TASK
} from "./ActionTypes";
import {
  openCreateTask,
  closeCreateTask
} from "./CreateTaskActions";

it("action openCreateTask", () => {
  const action = openCreateTask(1);
  expect(action).toEqual({type: OPEN_CREATE_TASK, tasklist_id: 1});
});

it("action closeCreateTask", () => {
  const action = closeCreateTask();
  expect(action).toEqual({type: CLOSE_CREATE_TASK});
});
