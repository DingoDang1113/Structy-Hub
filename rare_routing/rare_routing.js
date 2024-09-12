const rareRouting = (n, roads) => {
  // turn it to adjacency list
  const graph = generateGraph(n, roads);
  // console.log(graph)
  const visited = new Set();
  // traverse every city 
  const valid = traverseCities(graph, '0', visited, null)


  // return bool
  return valid && visited.size === n;
  
};


const traverseCities = (graph, city, visited, prevCity) => {
  //can't visit the same city twice 
  if (visited.has(city)) return false;
  visited.add(city);


  for(let neighbor of graph[city] ) {
    if (neighbor !== prevCity && traverseCities(graph, neighbor,visited, city) === false) {
      return false;
    }
  }


  return true;
}


const generateGraph = (n, roads) => {
  const graph = {};


  for (let city = 0; city < n; city += 1) {
    graph[city] = [];
  };


  for (let road of roads) {
    const [a,b] = road; 
    graph[a].push(String(b));
    graph[b].push(String(a));
  }




  return graph;
  
  
};


module.exports = {
  rareRouting,
};

