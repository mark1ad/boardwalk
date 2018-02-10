import Tasklist from './Tasklist';

it("new Tasklist", () => {
  const newTasklist = new Tasklist({id: "1", name: "tasklist1"});
  expect(newTasklist).toBeDefined();
})

it("valid id", () => {
  const tasklist = new Tasklist({id: "1", name: "tasklist1"});
  expect(tasklist.id).toEqual("1");
})

it("valid name", () => {
  const tasklist = new Tasklist({id: "1", name: "tasklist1"});
  expect(tasklist.name).toEqual("tasklist1");
})
