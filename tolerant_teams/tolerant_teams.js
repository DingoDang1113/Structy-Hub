const tolerantTeams = (rivalries) => {
  // turn pairs into adjacency list structure 
  const graph = buildGraph(rivalries);

  const visited = {};


  for (let rivary in graph) {
    if (!(rivary in visited) && !check(rivary, graph, visited, false)) {
      return false;
    }
  }


  return true;  
};


const check = (node, graph, visited, teamColor) => {
  if(node in visited) return visited[node]=== teamColor;
  visited[node] = teamColor;


  for(let neighbor of graph[node]) {
    if (check(neighbor, graph, visited, !teamColor) === false) {
      return false;
    }
  }


  return true;


  
};


const buildGraph = (edges) => {
  const graph = {}; 


  for(let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }


  return graph;
}


module.exports = {
  tolerantTeams,
};

