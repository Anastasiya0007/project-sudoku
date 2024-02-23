const fs = require('fs');

function read(num) {
  const readed = fs.readFileSync('./puzzles.txt', 'utf8').split('\n')[num].trim().split('');
  const sudo = [];
  for (let i = 0; i < 9; i += 1) {
    sudo.push(readed.splice(0, 9));
  }
  return sudo;
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
// kfkfkf
function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

module.exports = { read, solve, prettyBoard };
