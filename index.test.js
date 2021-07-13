const {
  removeExistNumbers,
  removeEmptyValues,
  removeExistNumbersInRow,
  getNumbersFromColumn,
  removeExistNumbersInColumn,
  getNumbersFromBox,
} = require("./index.js");

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

test("Remove Exist Numbers", () => {
  const possibleNumbers = [1, 2, 3, 4, 5, 6];
  const existNumbers = [2, 3, 4];

  const expectedNumbers = [1, 5, 6];

  expect(removeExistNumbers(existNumbers, possibleNumbers)).toEqual(
    expectedNumbers
  );
});

test("Remove Empty Values", () => {
  const array = ["5", "3", ".", ".", "7", ".", ".", ".", "."];
  const arrayWithoutEmptyValues = [5, 3, 7];

  expect(removeEmptyValues(array)).toEqual(arrayWithoutEmptyValues);
});

test("Remove Exist Numbers in Row", () => {
  const possibleNumbers = [1, 2, 3, 4, 5, 6];

  const expectedNumbers = [1, 2, 4, 6];

  expect(removeExistNumbersInRow(board[0], possibleNumbers)).toEqual(
    expectedNumbers
  );
});

test("Get Numbers from Column", () => {
  const expectedNumbers = [5, 6, 8, 4, 7];

  expect(getNumbersFromColumn(0, board)).toEqual(expectedNumbers);
});

test("Remove Exist Numbers In Column", () => {
  const numbersFromColumn = [5, 6, 8, 4, 7];
  const possibleNumbers = [1, 2, 3, 4, 5, 6];

  const expectedNumbers = [1, 2, 3];

  expect(
    removeExistNumbersInColumn(numbersFromColumn, possibleNumbers)
  ).toEqual(expectedNumbers);
});

test("Get Numbers from Box", () => {
  const expectedNumbers = [5, 3, 6, 9, 8];
  const result = getNumbersFromBox(0, 1, board);

  expect(result).toEqual(expectedNumbers);
});
