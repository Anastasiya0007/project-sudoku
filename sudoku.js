const fs = require('fs');

function read(num) { // num - индекс строки из текстового файла puzzles.txt
  const readed = fs.readFileSync('./puzzles.txt', 'utf8').split('\n')[num].trim().split('');
  const sudo = [];
  for (let i = 0; i < 9; i += 1) {
    sudo.push(readed.splice(0, 9));
  }
  return sudo;
}

function solve(board) {
  function isValid(row, col, num) {
    for (let i = 0; i < 9; i += 1) {
      if (parseInt(board[row][i]) === num) { // ищем совпадения в строке
        return false;
      }
    }

    for (let i = 0; i < 9; i += 1) {
      if (parseInt(board[i][col]) === num) { // ищем совпадение в столбце
        return false;
      }
    }

    const startRow = Math.floor(row / 3) * 3; // выделяем квадрат и ищем совпадения
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (parseInt(board[startRow + i][startCol + j]) === num) {
          return false;
        }
      }
    }

    return true;
  }

  for (let i = 0; i < 9; i += 1) { // проходимся по строкам
    for (let j = 0; j < 9; j += 1) { // ищем элемент внутри строки, который будет равен пустому значению
      if (board[i][j] === '-') {
        for (let num = 1; num <= 9; num += 1) { // перебираем числа
          if (isValid(i, j, num)) { // мы обращаемся к функции, которая проверяет строку, колонку и квадрат
            board[i][j] = num.toString(); // если везде false, то он на строку [i] на место с элемента [j] кладет число
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

module.exports = { read, solve };
