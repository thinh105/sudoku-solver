const {
  removeExistNumbers,
  getExistNumbersFromBox,
  mergeArraysWithUniqueValues,
  calculatePossibleNum,
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

test("Get Numbers from Box", () => {
  const expectedNumbers = [5, 3, 6, 9, 8];
  const result = getExistNumbersFromBox(0, 1, board);

  expect(result).toEqual(expectedNumbers);
});

test("Merge Arrays With Unique Values", () => {
  const array1 = [1, 2, 3];
  const array2 = [3, 4, 5];
  const array3 = [5, 6, 7];

  const expectedNumbers = [1, 2, 3, 4, 5, 6, 7];

  const result = mergeArraysWithUniqueValues(array1, array2, array3);

  expect(result).toEqual(expectedNumbers);
});

test("Calculate Possible Number", () => {
  const expectedNumbers = [1, 2];

  const result = calculatePossibleNum(2, 0, board);

  expect(result).toEqual(expectedNumbers);
});
