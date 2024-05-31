largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4
largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}); // -> 6
largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); // -> 5
largestComponent({}); // -> 0
largestComponent({
  0: ['4','7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []
}); // -> 3
const largestComponent = (graph) => {
  let max = 0;
  const visited = new Array(graph.length).fill(false); // array might be a better choice with better time efficiency and space efficiency
  
  for (let node in graph) {
    let size = explore(graph, node, visited);
    if (size > max) {
      max = size;
    }
  }


  return max;
};


const explore = (graph, current, visited) => {
  if (visited[current]) return 0;
  visited[current] = true;


  let sum = 1;


  for (let neighbor of graph[current]) {
    sum += explore(graph, neighbor, visited);
  }


  return sum;
};




// --------------Decalare visited in Set -----------------