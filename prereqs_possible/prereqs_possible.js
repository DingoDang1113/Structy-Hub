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


  //converst edge list into adjacency list for better efficiency 
  const graph = buildGraph(numCourses, prereqs);


  //cycle detection 
  for (let node in graph) {
    // check if traversing the graph starting from current node resulting in detection of cycle
    if (traverseCourse(graph, node,visited, visiting)) {
      return false;
    }
  }
  return true;
};


const traverseCourse = (graph, node, visited, visiting) => {
  // edge case -> detection of cycle
  if (visiting.has(node)) return true; 
  visiting.add(node);


  for (let neighbor of graph[node]) {
    if (traverseCourse(graph, neighbor, visited, visiting) === true) {
      return true;
    }
  };
  visiting.delete(node);
  visited.add(node);
// no cycle has been detected 
  return false;
  
};


const buildGraph = (numCourses, prereqs) => {
  const graph = {}; 
  // initiate the key 
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }
  // populating each key with courses  
  for (let prereq of prereqs) {
    const[a, b] = prereq; 
    graph[a].push(String(b));
  }


  return graph;
};


module.exports = {
  prereqsPossible,
};

