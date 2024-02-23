// Используйте для решения судоку необходимые функции из файла sudoku.js
const { read, solve, prettyBoard } = require('./sudoku');

const sudokuBoard1 = read(0);
const sudokuBoard2 = read(1);
const sudokuBoard3 = read(2);
const sudokuBoard4 = read(3);
const sudokuBoard5 = read(4);

console.table(solve(sudokuBoard1));
console.table(solve(sudokuBoard2));
console.table(solve(sudokuBoard3));
console.table(solve(sudokuBoard4));
console.table(solve(sudokuBoard5));
