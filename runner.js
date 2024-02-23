// Используйте для решения судоку необходимые функции из файла sudoku.js
const { read, solve, prettyBoard } = require('./sudoku');


console.table(solve(read(process.argv[2])));
