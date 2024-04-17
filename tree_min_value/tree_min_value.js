// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
const treeMinValue = (root) => {
  // RECURSION - Better solution - cleaner and require less stack depth 
  if(root === null) return Infinity;
  const minLeft = treeMinValue(root.left);
  const minRight = treeMinValue(root.right);

  return Math.min(root.val, minLeft,minRight);

}

// const treeMinValue = (root, minVal = root.val) => {
//   //RECURSION 
//   if(root === null) return minVal;
//   if(root.val < minVal) minVal = root.val;
//   if (treeMinValue(root.left, minVal) <= treeMinValue(root.right,minVal) ) {
//     return treeMinValue(root.left, minVal); 
//     } else {
//     return treeMinValue(root.right, minVal);
//     }


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


// const treeMinValue = (root) => {
//   // Iterative - BFS 
//   const queue = [root]; 
//   let minVal = root.val; 


//   while(queue.length > 0) {
//     let current = queue.shift();
//     if(minVal > current.val) {
//       minVal = current.val;
//     }
//     if(current.left) queue.push(current.left); 
//     if(current.right) queue.push(current.right);
//   }
//   return minVal;




// };


module.exports = {
  treeMinValue,
};

