const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: []
};


longestPath(graph); // -> 2
const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: []
};


longestPath(graph); // -> 4
const graph = {
  h: ['i', 'j', 'k'],
  g: ['h'],
  i: [],
  j: [],
  k: [],
  x: ['y'],
  y: []
};


longestPath(graph); // -> 2
const graph = {
  a: ['b'],
  b: ['c'],
  c: [],
  e: ['f'],
  f: ['g'],
  g: ['h'],
  h: []
};


longestPath(graph); // -> 3
const graph = {
  a: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  b: ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  c: ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  d: ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  e: ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
  f: ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  g: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  h: ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  i: ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
  j: ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
  k: ['l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
  l: ['m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  m: ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  n: ['o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  o: ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
  p: ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  q: ['r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
  r: ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  s: ['t', 'u', 'v', 'w', 'x', 'y', 'z'],
  t: ['u', 'v', 'w', 'x', 'y', 'z'],
  u: ['v', 'w', 'x', 'y', 'z'],
  v: ['w', 'x', 'y', 'z'],
  w: ['x', 'y', 'z'],
  x: ['y', 'z'],
  y: ['z'],
  z: []
};


longestPath(graph); // -> 25
const longestPath = (graph) => {
  //create a dist obj to track visited node with dist
  const dist = {};
  //iterate graph to find terminal node 
  for (let node in graph) {
    if (graph[node].length === 0) {
      dist[node] = 0;
    }
  };


  //iterate graph with helper function to populate dist obj 
  for (let node in graph) {
    traveseDist(graph, node, dist);
  }
  // return the max val of dist obj -> need ... to convert array to numbers
  return Math.max(...Object.values(dist));
}


const traveseDist = (graph, node, dist) => {
  //edge case -> return dist[node] if node has been visited/terminal
  if (node in dist) return dist[node];


  let maxPath = 0 ; 
  // iterate the neighbor of current node to find dist to compare with maxPath
  for (let neighbor of graph[node]) {
    const attempt = traveseDist(graph, neighbor, dist);
    if (attempt > maxPath) maxPath = attempt;
  };
  // add node to dist 
  dist[node] = 1 + maxPath;
  return dist[node];
}


module.exports = {
  longestPath,
};

