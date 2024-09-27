const rareRouting = (n, roads) => {
  // generate graph 
  const graph = generateGraph(n, roads);

  const visited = new Set();
  const valid = traverseCities("0", graph, visited, null);


  // iterate thru every node of the graph to check if any node has been visited before 
    // if has been visited, return false (means the route has been explored before)


  // return the validity of graph, and and check the size of the visited 
  return valid && visited.size === n;
};


const traverseCities = (city, graph, visited, prevCity) => {
  if (visited.has(city)) return false;
  visited.add(city); 


  for(let neighbor of graph[city]) {
    if(neighbor !== prevCity && traverseCities(neighbor, graph, visited, city) === false){
      return false;
    }
  }
  return true;
}


const generateGraph = (n, roads) => {


  const graph = {};


  for (let city = 0; city < n ; city += 1) {
    graph[city] = [];
  };


  for (let road of roads) {
    const [a, b] = road
    graph[a].push(String(b));
    graph[b].push(String(a));


    
  }
  return graph;
  
}


module.exports = {
  rareRouting,
};

