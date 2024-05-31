const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};


hasPath(graph, 'f', 'k'); // true
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};


hasPath(graph, 'f', 'j'); // false
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};


hasPath(graph, 'i', 'h'); // true
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};


hasPath(graph, 'v', 'w'); // true
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};


hasPath(graph, 'v', 'z'); // false
const hasPath = (graph, src, dst) => {
  // RECURSION 
  if(src === dst) return true;
  
  for(let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true ) return true;  //check if the function is return true
  }
  return false;
}




// const hasPath = (graph, src, dst) => {
//   // ITERATIVE - DFS 
//   const stack = [src];
//   while( stack.length > 0 ) {
//     let current = stack.pop(); 
//     if (current === dst) return true;
    
//     for (let neighbor of graph[current]) {
//       stack.push( neighbor )
//     }
//   }


//   return false;
// };


// const hasPath = (graph, src, dst) => {
//   // ITERATIVE - BFS 