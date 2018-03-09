import Task from './Task';

let task;

beforeEach(() => {
 task = new Task({id: "1", name: "task1", description: "task 1 description"});
})

it("new Task", () => {
  expect(task).toBeDefined();
})

it("valid id from constructor", () => {
  expect(task.id).toEqual("1");
})

it("valid name from constructor", () => {
  expect(task.name).toEqual("task1");
})

it("valid description from constructor", () => {
  expect(task.description).toEqual("task 1 description");
})
