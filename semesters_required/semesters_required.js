const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
semestersRequired(numCourses, prereqs); // -> 3
const numCourses = 7;
const prereqs = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
semestersRequired(numCourses, prereqs); // -> 5
const numCourses = 5;
const prereqs = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2],
];
semestersRequired(numCourses, prereqs); // -> 2
const numCourses = 12;
const prereqs = [];
semestersRequired(numCourses, prereqs); // -> 1
const numCourses = 3;
const prereqs = [
  [0, 2],
  [0, 1],
  [1, 2],
];
semestersRequired(numCourses, prereqs); // -> 3
const numCourses = 6;
const prereqs = [
  [3, 4],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 5],
];
semestersRequired(numCourses, prereqs); // -> 2
const semestersRequired = (numCourses, prereqs) => {
  //construct graph 
  const graph = buildGraph(numCourses, prereqs);
  // declare semester obj to track the course to take
  const semester = {}; 
  // find terminal course 
  for (let course in graph) {
    if (graph[course].length === 0) {
      semester[course] = 1;
    }
  }
  // iterate through the graph with dfs to populate the semester obj
  for (let course in graph) {
    traverseCourse(graph, course, semester)
  }


  // return the max semester number 
  // console.log(semester)
  return Math.max(...Object.values(semester));
  
};


const traverseCourse = (graph, course, semester) => {
  //edge case of terminal/visited course 
  if (course in semester) return semester[course];


  let maxSem = 0; 
  // recursion through the neighbor of course 
  for (let neighbor of graph[course]) {
    const semNum = traverseCourse(graph, neighbor, semester);
    if (maxSem < semNum) maxSem = semNum;
  }


  //add new course in semester
  semester[course] = 1 + maxSem; 
  return semester[course];
}




const buildGraph = (numCourses, prereqs) => {
  const graph = {}; 
  for (let i = 0; i < numCourses; i += 1 ) {
    graph[i] = [];
  }
  for (let req of prereqs) {
    const [a,b] = req; 