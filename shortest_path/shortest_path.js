const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];


shortestPath(edges, 'w', 'z'); // -> 2
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];


shortestPath(edges, 'y', 'x'); // -> 1
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];


shortestPath(edges, 'a', 'e'); // -> 3
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];


shortestPath(edges, 'e', 'c'); // -> 2
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];


shortestPath(edges, 'b', 'g'); // -> -1
const edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];


shortestPath(edges, 'w', 'e'); // -> 1
const edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];


shortestPath(edges, 'n', 'e'); // -> 2
const edges = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
];


shortestPath(edges, 'm', 's'); // -> 6
const shortestPath = (edges, nodeA, nodeB) => {
  // convert edges to graph
  const graph = buildGraph(edges);
  // check for visited node
  const visited = new Set([ nodeA ]);
  // BFS traverse
  const queue = [ [nodeA, 0] ];


  while (queue.length > 0) {
    //unpack items of queue
    const [node, dist] = queue.shift();
    if (node === nodeB) return dist;
    // check for neighbour of current node
    for(let neighbour of graph[node]){
      // add condition to account for visited node -> only add not visited node
      if(!visited.has(neighbour)){
        visited.add(neighbour);
        queue.push([neighbour, dist + 1]); 
      }
    }
  }
  
  return -1;
  
};


// converst edges into adjacency list 
const buildGraph = (edges) => {
  const graph = {}; 
  for (let edge of edges) {
    const [a, b] = edge;
    if(!(a in graph)) graph[a] = []; 
    if(!(b in graph)) graph[b] = []; 
    graph[a].push(b); 
    graph[b].push(a);
  };
  return graph; 
};


module.exports = {
  shortestPath,
};

