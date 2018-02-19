import Tasklist from './Tasklist';
import Task from './Task';

let tasklist;
const dbTask = {id: 1, name: "name"};
const task = new Task(dbTask);
const tasklistData = {id: 1, name: "tasklist1"};
const dbTasklist = {tasklist: tasklistData, tasks: []};

beforeEach(() => {
  tasklist = new Tasklist(dbTasklist);
})

it("new Tasklist", () => {
  expect(tasklist).toBeDefined();
})

it("valid id", () => {
  expect(tasklist.id).toEqual(1);
})

it("valid name", () => {
  expect(tasklist.name).toEqual("tasklist1");
})

it("empty tasks array from constructor", () => {
  expect(tasklist.tasks.length).toEqual(0);
})

it("tasklist has tasks", () => {
  let newDBTasklist = dbTasklist;
  newDBTasklist.tasks = [ task ];
  const tasklist = new Tasklist(newDBTasklist);
  expect(tasklist.tasks.length).toEqual(1);
})
