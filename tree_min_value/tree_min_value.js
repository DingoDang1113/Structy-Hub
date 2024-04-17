// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// const treeMinValue = (root) => {
//   // Iterative - DFS 
//   const stack = [root]; 
//   let minVal = root.val; 


//   while(stack.length > 0) {
//     let current = stack.pop();
//     if(minVal > current.val) {
//       minVal = current.val;
//     }
//     if(current.left) stack.push(current.left); 
//     if(current.right) stack.push(current.right);
//   }
//   return minVal;
  
// };


const treeMinValue = (root) => {
  // Iterative - BFS 
  const queue = [root]; 
  let minVal = root.val; 


  while(queue.length > 0) {
    let current = queue.shift();
    if(minVal > current.val) {
      minVal = current.val;
    }
    if(current.left) queue.push(current.left); 
    if(current.right) queue.push(current.right);
  }
  return minVal;
  
};


module.exports = {
  treeMinValue,
};

