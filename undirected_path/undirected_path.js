const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'j', 'm'); // -> true
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'm', 'j'); // -> true
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'l', 'j'); // -> true
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'k', 'o'); // -> false
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


undirectedPath(edges, 'i', 'o'); // -> false
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];




undirectedPath(edges, 'a', 'b'); // -> true
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


undirectedPath(edges, 'a', 'c'); // -> true
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


undirectedPath(edges, 'r', 't'); // -> true
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


undirectedPath(edges, 'r', 'b'); // -> false
const edges = [
  ['s', 'r'],
  ['t', 'q'],
  ['q', 'r'],
];


undirectedPath(edges, 'r', 't'); // -> true
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};


// traverse through graph
// IMPORTANT: add visited to avoid infinite loop, as undirected path are two way connection
const hasPath = (graph, src, dst, visited) => {
  if (visited.has(src)) return false;
  if (src === dst) return true; 


  visited.add(src);


  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) return true;
  }; 
  return false;
  
}


// convert edge list into a adjacent list 
const buildGraph = (edges) => {
  const graph = {}; 


  for (let edge of edges) {