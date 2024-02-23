const fs = require('fs');

function read(num) {
  const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8')
    .trim()
    .split('\n')[num].split('');
  const res = [];
  for (let i = 0; i < 9; i += 1) {
    res.push(puzzles.splice(0, 9));
  }
  return res;
}

function solve(sudoku) {
  return sudoku;
}

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

module.exports = { read, solve, prettyBoard };
