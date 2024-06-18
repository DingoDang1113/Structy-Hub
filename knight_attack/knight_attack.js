knightAttack(8, 1, 1, 2, 2); // -> 2
knightAttack(8, 1, 1, 2, 3); // -> 1
knightAttack(8, 0, 3, 4, 2); // -> 3
knightAttack(8, 0, 3, 5, 2); // -> 4
knightAttack(24, 4, 7, 19, 20); // -> 10
knightAttack(100, 21, 10, 0, 0); // -> 11
knightAttack(3, 0, 0, 1, 2); // -> 1
knightAttack(3, 0, 0, 1, 1); // -> null
const knightAttack = (n, kr, kc, pr, pc) => {




  const kMoves = [[2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]];


  return traverseK(n, kr, kc, pr, pc, kMoves);
  
};


const inBounds = (n, row, col) => {
  const rowInBounds = 0 <= row && row < n; 
  const colInBounds = 0 <= col && col < n; 


  return rowInBounds && colInBounds; 
}; 


const traverseK = (n, row, col, pr, pc, kMoves) => {
  const visted = new Set(); 
  visted.add([`${row}, ${col}`]); 


  const queue = [[row, col, 0]]; 


  while (queue.length > 0) {
    const [currRow, currCol, steps] = queue.shift(); 
    if(currRow === pr && currCol === pc) return steps;