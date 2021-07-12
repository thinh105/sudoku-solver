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

const solveSudoku = function (board) {
  const countEmptyNums = () => {};
  const POSIBLE_NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const possibleNumsBoard = [[], [], [], [], [], [], [], [], []];

  const calculatePossibleNums = () => {
    checkRows();
    checkColumns();
    check3x3Boxes();

    updatePossibleNums();
  };

  const calculatePossibleNum = (x, y) => {
    // quick shadow clone for one dimension array with only primitive value
    const nums = POSIBLE_NUMS.slice();

    const posibleNumsInRow = checkRow(x, nums);
    const posibleNumsInRowAndColumn = checkColumn(y, posibleNumsInRow);

    const possibleNums = check3x3Box(x, y, posibleNumsInRowAndColumn);

    updatePossibleNum(x, y, possibleNums);
  };

  const checkRow = (rowIndex, posibleNums) => {
    const allNumsInRow = removeEmptyValues(board[rowIndex]);

    return calculatePossibleNumbers(allNumsInRow, posibleNums);
  };

  const checkColumn = (columnIndex) => {
    const columnValues = [];

    for (const i = 0; i < 9; i++) {
      columnValues.push(board[i][columnIndex]);
    }

    const allNumsFromColumn = removeEmptyValues(columnValues);
    return calculatePossibleNumbers(allNumsFromColumn);
  };

  const check3x3Box = (rowIndex, columnIndex, posibleNums) => {
    const rowIndexBox = (rowIndex - 1) / 3;
    const columnIndexBox = (columnIndex - 1) / 3;

    const boxValues = [];

    for (const i = 0; i < 3; i++) {}
  };

  const removeEmptyValues = (array) =>
    array.filter((element) => element !== ".");

  const calculatePossibleNumbers = (numbers, posibleNums) => {
    return posibleNums.filter((el) => !numbers.includes(el));
  };

  const updateNum = (newVal, x, y) => {
    board[x][y] = newVal;
    calculatePossibleNums();
  };
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
