const hasPath = (graph, src, dst) => {
  // ITERATIVE - DFS 


  const stack = [src];


  while( stack.length > 0 ) {
    let current = stack.pop(); 
    console.log(current)


    if (current === dst) return true;


    for (let neighbor of graph[current]) {
      stack.push( neighbor )
    }
  }


  return false;
  
};


module.exports = {
  hasPath,
};

