const grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 1
const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["L", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "L"],
  ["W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 2
const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["L", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 3
const grid = [
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "W", "W"],
  ["W", "W", "W", "W", "L", "L", "L", "W"],
  ["W", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "W", "W", "W", "W", "L", "L", "L"],
  ["L", "L", "L", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
];
bestBridge(grid); // -> 3
const grid = [
  ["L", "L", "L", "L", "L", "L", "L", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "L", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "W", "W", "W", "W", "W", "W", "L"],
  ["L", "L", "L", "L", "L", "L", "L", "L"],
];
bestBridge(grid); // -> 2
const grid = [
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "L", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "W"],
  ["W", "W", "W", "W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W", "W", "W", "L"],
];
bestBridge(grid); // -> 8
const bestBridge = (grid) => {
  let mainIsland = new Set();


  // iterate thru the grid to find the positions of mainIsland
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if(grid[r][c] === "L" && !mainIsland.size) {
        mainIsland = traverseIsland(grid, r, c, new Set());
        break; // exit the inner loop once the first island is found
      }
    };
    if(mainIsland.size) break;   // exit the outter loop 
  };


  // BFS to check surrounding of each Land to find the distance between two islands
  const visited = new Set(mainIsland); 
  const queue = [];
  for (let pos of mainIsland) {
    const [row, col] = pos.split(",").map(Number);
    queue.push([row, col, -1]);
  }
  
  while (queue.length > 0) {
    const[row, col, dist] = queue.shift(); 
    const pos = row + "," + col; 
    
    if (grid[row][col] === "L" && !mainIsland.has(pos)) return dist; 


    const deltas = [ [-1, 0], [1, 0], [0, 1], [0, -1] ]; 
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta; 
      const neighborRow = row + deltaRow; 
      const neighborCol = col + deltaCol; 
      const neighborPos = neighborRow + "," + neighborCol;
      if(inBounds(grid, neighborRow, neighborCol) && !visited.has(neighborPos)) {
        visited.add(neighborPos); 
        queue.push([neighborRow, neighborCol, dist + 1]);
      }
      
    }
    
  }
  
};


//check inbounds 
const inBounds = (grid, r, c) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;


  return rowInbounds && colInbounds; 
  
};




// finding the islands positions 
const traverseIsland = (grid, r, c, visited) => {


  if (!inBounds(grid, r, c) || grid[r][c] === "W" ) return visited;
  const pos = r + ',' + c; 


  if (visited.has(pos)) return visited; 
  visited.add(pos);

