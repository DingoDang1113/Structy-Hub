// const hasPath = (graph, src, dst) => {
//   // RECURSION 
//   if(src === dst) return true;
//   if(src === null) return false;
//   console.log(src);


//   for(let neighbor of graph[src]) {
//     hasPath(graph, neighbor, dst);
//   };
// }


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


const hasPath = (graph, src, dst) => {
  // ITERATIVE - BFS 
  const queue = [src]; 
  while(queue.length > 0) {
    let current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
  }
  }
  return false;
}


module.exports = {
  hasPath,
};

