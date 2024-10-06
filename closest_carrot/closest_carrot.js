const closestCarrot = (grid, startRow, startCol) => {
  const visted = new Set([startRow + ',' + startCol]); 
  const queue = [ [startRow, startCol, 0] ]; 


  while (queue.length > 0) {
    const [row, col, dist] = queue.shift(); 
    if (grid[row][col] === "C") return dist;
    
    //DRY - const possible path
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

