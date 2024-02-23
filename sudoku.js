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
// function solve() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции read.
//    * Возвращает игровое поле после попытки его решить.
//    */
// }

// function isSolved() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//    * Возвращает булевое значение — решено это игровое поле или нет.
//    */
// }

// function prettyBoard() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//    * Выводит в консоль/терминал судоку.
//    * Подумай, как симпатичнее его вывести.
//    */
// }


