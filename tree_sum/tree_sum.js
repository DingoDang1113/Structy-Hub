// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const treeSum = (root) => {
  // Recursion 
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right); 
}




// const treeSum = (root) => {
//   // Iterative - DFS 
//   let sum = 0; 
//   const stack = [root];


//   while (stack.length > 0) {
//     let current = stack.pop();   // start with end of arr
//     if (current !== null) {
//       sum += current.val;   
//       if(current.left) stack.push(current.left);
//       if(current.right) stack.push(current.right);
//     }
//   }
//   return sum;
// };


// const treeSum = (root) => {
//   // Iterative - BFS 
//   let sum = 0; 
//   const queue = [root];


//   while (queue.length > 0) {
//     let current = queue.shift();  // start with head of arr
//     if (current !== null) {
//       sum += current.val;   
//       if(current.left) queue.push(current.left);
//       if(current.right) queue.push(current.right);
//     }
//   }
//   return sum;
// };


module.exports = {
  treeSum,
};

