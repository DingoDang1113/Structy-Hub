const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
prereqsPossible(numCourses, prereqs); // -> true
const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];
prereqsPossible(numCourses, prereqs); // -> false
const numCourses = 5;
const prereqs = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
];
prereqsPossible(numCourses, prereqs); // -> true
const numCourses = 6;
const prereqs = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
  [5, 3],
  [3, 5],
];
prereqsPossible(numCourses, prereqs); // -> false
const numCourses = 8;
const prereqs = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [4, 3],
];
prereqsPossible(numCourses, prereqs); // -> true
const numCourses = 8;
const prereqs = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [7, 4],
  [4, 3],
];
prereqsPossible(numCourses, prereqs); // -> false
const numCourses = 42;
const prereqs = [[6, 36]];
prereqsPossible(numCourses, prereqs); // -> true
const prereqsPossible = (numCourses, prereqs) => {


  const visited = new Set();
  const visiting = new Set();
  const graph = buildGraph(numCourses, prereqs);
  
  for (let node in graph) {
    if (traverseCourse(graph, node,visited, visiting)) {
      return false;
    }
  }
  return true;
};


const traverseCourse = (graph, node, visited, visiting) => {
  if (visiting.has(node)) return true; 
  visiting.add(node);


  for (let neighbor of graph[node]) {
    if (traverseCourse(graph, neighbor, visited, visiting) === true) {
      return true;
    }
  };
  visiting.delete(node);
  visited.add(node);


  return false;
  
};


const buildGraph = (numCourses, prereqs) => {
  const graph = {}; 


  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }


  for (let prereq of prereqs) {
    const[a, b] = prereq; 
    graph[a].push(String(b));
  }


  return graph;
};


module.exports = {
  prereqsPossible,
};

