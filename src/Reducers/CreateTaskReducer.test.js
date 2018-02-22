import deepFreeze from 'deep-freeze';

import { CreateTask } from './CreateTaskReducer';
import {
  openCreateTask,
  closeCreateTask
} from "../Actions/CreateTaskActions";

it("create task default success", () => {
  const action = { type: "" };
  deepFreeze(action);
  const results = CreateTask(undefined, action);
  expect(results).toEqual({isTaskOpen: false});
});

it("create task open", () => {
  const action = openCreateTask(1);
  deepFreeze(action);
  const results = CreateTask({}, action);
  expect(results.isTaskOpen).toEqual(true);
  expect(results.tasklist_id).toEqual(1);
})

it("create task close", () => {
  const action = closeCreateTask();
  deepFreeze(action);
  const results = CreateTask({}, action);
  expect(results.isTaskOpen).toEqual(false);
})
