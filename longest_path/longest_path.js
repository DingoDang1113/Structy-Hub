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

