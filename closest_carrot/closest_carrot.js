const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];


closestCarrot(grid, 1, 2); // -> 4
const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];


closestCarrot(grid, 0, 0); // -> 5
const grid = [
  ['O', 'O', 'X', 'X', 'X'],
  ['O', 'X', 'X', 'X', 'C'],
  ['O', 'X', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'C', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O'],
];


closestCarrot(grid, 3, 4); // -> 9
const grid = [
  ['O', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'O'],
  ['O', 'X', 'C', 'C', 'O'],
];


closestCarrot(grid, 1, 4); // -> 2
const grid = [
  ['O', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'O'],
  ['O', 'X', 'C', 'C', 'O'],
];


closestCarrot(grid, 2, 0); // -> -1
const grid = [
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
];


closestCarrot(grid, 0, 0); // -> -1
const grid = [
  ['O', 'O', 'X', 'C', 'O'],
  ['O', 'X', 'X', 'X', 'O'],
  ['C', 'X', 'O', 'O', 'O'],
];


closestCarrot(grid, 2, 2); // -> 5
const closestCarrot = (grid, startRow, startCol) => {
  // todo
  const visted = new Set([startRow + ',' + startCol]); 
  const queue = [ [startRow, startCol, 0] ]; 


  while (queue.length > 0) {
    const [row, col, dist] = queue.shift(); 
    if (grid[row][col] === "C") return dist;


    //DRY
    const deltas = [[1,0], [-1, 0], [0, 1], [0, -1]];


    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;//unpack 
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      //check if neighbor row/col is in bound
      const rowInBound = 0<= neighborRow  && neighborRow < grid.length; 
      const colInBound = 0<= neighborCol && neighborCol < grid[0].length;
      //prep neighbor pos for visited
      const pos = neighborRow + ',' + neighborCol;


      if(
        rowInBound && colInBound &&
        !visted.has(pos) &&
        grid[neighborRow][neighborCol] !== "X" 
      ) {
        queue.push([neighborRow, neighborCol, dist + 1]);
        visted.add(pos);
      }   
    }
  } 


  return -1;
};


module.exports = {
  closestCarrot,
};

