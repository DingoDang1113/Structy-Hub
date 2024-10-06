const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = explore(grid, r, c, visited);
      if( size > 0 && minSize > size ) {
        minSize = size;
      }
    }
  }
  return minSize;
};


const explore = (grid, r, c, visited) => {
  // check inbounds 
  const rowBounds = 0 <= r && r < grid.length; 
  const colBounds = 0 <= c && c < grid[0].length; 
  if (!rowBounds || !colBounds) return 0;
  // check water 
  if (grid[r][c] === "W") return 0;


  // check visited
  const pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);


  //check neighbours - add up the 1s for each land
  let size = 1;
  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r, c - 1, visited); 
  size += explore(grid, r, c + 1, visited);


  return size;
  
}




module.exports = {
  minimumIsland,
};

