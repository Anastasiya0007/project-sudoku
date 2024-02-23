const { read, solve } = require('./sudoku');

const board = read(process.argv[2]);
solve(board);
console.table(board);
