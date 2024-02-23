const fs = require('fs');

function read(num) { //num - индекс строки из текстового файла puzzles.txt
  const readed = fs.readFileSync("./puzzles.txt", "utf8").split('\n')[num].trim().split('');
  const sudo = [];
  for (let i = 0; i < 9; i++) {
    sudo.push(readed.splice(0,9))
  }
  return sudo;
}
console.table(read(5))

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