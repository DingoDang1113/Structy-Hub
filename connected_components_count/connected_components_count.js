connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2
connectedComponentsCount({
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}); // -> 1
connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}); // -> 3
connectedComponentsCount({}); // -> 0
connectedComponentsCount({
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
}); // -> 5
const connectedComponentsCount = (graph) => {
  const visited = new Set(); 
  let count = 0; 
  // Iterate through each node in the graph
  for (let node in graph) {
    // if the current code hasn't been visited yet
    if(explore(graph, node, visited)) {
      // increment count + 1
      count += 1;
    }
  }
  return count;
};


const explore = (graph, current, visited) => {
  //check if current node has been visited
    // if yes, return false -> not activating explore recurrsion to check neighbors of current node
  if (visited.has(String(current))) return false;
    // if not in the visited set, add current node into set
  visited.add(String(current));


  // iterate through the neighbor of current node with recurrsion - DFS
  for(let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  };
  // all connected nodes have been visited, return true to indicate for new connected component
  return true;
}


//////  BFS SOLUTIONS ////////////
// const connectedComponentsCount = (graph) => {
//   const visited = new Set(); 
//   let count = 0; 
//   for (let node in graph) {
//     if (!visited.has(node)) {
//       bfs(graph, node, visited);
//       count++;
//     }
//   }
//   return count;
// };


// const bfs = (graph, start, visited) => {
//   const queue = [start];
//   visited.add(start);
  
//   while (queue.length > 0) {
//     const current = queue.shift();
//     for (let neighbor of graph[current]) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push(neighbor);
//       }
//     }
//   }
// };


module.exports = {
  connectedComponentsCount,
};

