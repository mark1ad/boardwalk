import Task from "./Task";

class Tasklist {
  constructor(tasklist) {
    this.id = tasklist.tasklist.id;
    this.name = tasklist.tasklist.name;
    this.tasks = [];
    tasklist.tasks.forEach(dbTask => {
      const task = new Task(dbTask);
      this.tasks.push(task);
    });
  }
}

export default Tasklist;
