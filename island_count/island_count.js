const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];


islandCount(grid); // -> 3
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];


islandCount(grid); // -> 4
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];


islandCount(grid); // -> 1
 const grid = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];


islandCount(grid); // -> 0
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0 ;
  
  for (let r = 0; r < grid.length; r += 1) {
    for(let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r , c, visited) === true) {
        count += 1;
      } 
    }
  }
  // console.log(visited)
  return count;
};


const explore = (grid, r, c, visited) => {
  // basecase 1: check if pos in bounds 
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;


  // basecase 2: check if pos is Water 
  if (grid[r][c] === "W") return false;


  const pos = r + ',' + c; 
  // basecase 3: check if pos has been visited, if visited then false
  if (visited.has(pos)) return false;
  //if not visited, then add to the set
  visited.add(pos);


  // traverse node up
  explore(grid, r - 1, c, visited);
  // traverse node down
  explore(grid, r + 1, c, visited);
  // traverse node left
  explore(grid, r, c - 1, visited);
  // traverse node right
  explore(grid, r, c + 1, visited);


  // finish all the traverse
  return true;
};


module.exports = {
  islandCount,
};

