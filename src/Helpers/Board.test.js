import Board from './Board';

it("new Board", () => {
  const newBoard = new Board({id: "1", name: "board1"});
  expect(newBoard).toBeDefined();
})

it("valid id", () => {
  const board = new Board({id: "1", name: "board1"});
  expect(board.id).toEqual("1");
})

it("valid name", () => {
  const board = new Board({id: "1", name: "board1"});
  expect(board.name).toEqual("board1");
})
