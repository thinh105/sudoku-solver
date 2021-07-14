/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/**
 *
 * Input:
 * [
 * ["5","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 */

const solveSudoku = function (board) {};

const calculatePossibleNums = () => {
  calculateNums: for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; i++) {
      if (board[i][j] === ".") {
        const possibleNums = calculatePossibleNum(i, j, board);

        if ((possibleNums.length = 1)) {
          updateNum(i, j, board);
          break calculateNums;
        }
      }
    }
  }
};

exports.calculatePossibleNum = (x, y, board) => {
  // quick shadow clone for one dimension array with only primitive value
  let possibleNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const existNumbersInRow = board[x]
    .filter((element) => element !== ".")
    .map((element) => Number(element));

  const existNumbersFromColumn = exports.getExistNumbersFromColumn(y, board);
  const existNumbersFromBox = exports.getExistNumbersFromBox(x, y, board);

  const existNumbers = exports.mergeArraysWithUniqueValues(
    existNumbersInRow,
    existNumbersFromColumn,
    existNumbersFromBox
  );

  return exports.removeExistNumbers(existNumbers, possibleNums);
};

exports.mergeArraysWithUniqueValues = (...arrays) => {
  let temp = [];

  for (const array of arrays) {
    temp = [...temp, ...array.filter((item) => !temp.includes(item))];
  }

  return temp;
};

exports.getExistNumbersFromColumn = (columnIndex, board) => {
  const columnValues = [];

  for (let i = 0; i < 9; i++) {
    const value = board[i][columnIndex];

    if (value !== ".") columnValues.push(Number(value));
  }

  return columnValues;
};

exports.getExistNumbersFromBox = (rowIndex, columnIndex, board) => {
  const boxValues = [];

  const rowIndexBox = Math.floor(rowIndex / 3);
  const columnIndexBox = Math.floor(columnIndex / 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const value = board[rowIndexBox * 3 + i][columnIndexBox * 3 + j];

      if (value !== ".") boxValues.push(Number(value));
    }
  }

  return boxValues;
};

exports.removeExistNumbers = (existNumbers, possibleNums) => {
  return possibleNums.filter((el) => !existNumbers.includes(el));
};

const updateNum = (newVal, x, y) => {
  board[x][y] = newVal;
  calculatePossibleNums();
};

// Output:
// [
// ["5","3","4","6","7","8","9","1","2"],
// ["6","7","2","1","9","5","3","4","8"],
// ["1","9","8","3","4","2","5","6","7"],
// ["8","5","9","7","6","1","4","2","3"],
// ["4","2","6","8","5","3","7","9","1"],
// ["7","1","3","9","2","4","8","5","6"],
// ["9","6","1","5","3","7","2","8","4"],
// ["2","8","7","4","1","9","6","3","5"],
// ["3","4","5","2","8","6","1","7","9"]
// ]
