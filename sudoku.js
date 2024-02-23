function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function solve(board) {
  function isValid(row, col, num) {

    for (let i = 0; i < 9; i++) {
        if (parseInt(board[row][i]) === num) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        if (parseInt(board[i][col]) === num) {
            return false;
        }
    }

        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (parseInt(board[startRow + i][startCol + j]) === num) {
                    return false;
                }
            }
        }

    return true;
}

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (board[i][j] === '-') {
            for (let num = 1; num <= 9; num++) {
                if (isValid(i, j, num)) {
                    board[i][j] = num.toString();
                    if (solve(board)) {
                        return true;
                    }
                    board[i][j] = '-';
                }
            }
            return false;
        }
    }
}
return board;
}


const board = [
  ['5', '3', '-', '-', '7', '-', '-', '-', '-'],
  ['6', '-', '-', '1', '9', '5', '-', '-', '-'],
  ['-', '9', '8', '-', '-', '-', '-', '6', '-'],
  ['8', '-', '-', '-', '6', '-', '-', '-', '3'],
  ['4', '-', '-', '8', '-', '3', '-', '-', '1'],
  ['7', '-', '-', '-', '2', '-', '-', '-', '6'],
  ['-', '6', '-', '-', '-', '-', '2', '8', '-'],
  ['-', '-', '-', '4', '1', '9', '-', '-', '5'],
  ['-', '-', '-', '-', '8', '-', '-', '7', '9']
];

solve(board)
console.table(solve(board))

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
