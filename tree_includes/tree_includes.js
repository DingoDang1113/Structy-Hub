// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// const treeIncludes = (root, target) => {
//   // RECURSION  
//   if(root === null) return false; 
//   if(root.val === target) return true; 


//   if(root.left !== null) treeIncludes(root.left, target);
//   if(root.right !== null) treeIncludes(root.right, target);
// }




// const treeIncludes = (root, target) => {
//   // iterative - DFS 
//   if (root === null) return false;
//   const stack = [root];


//   while (stack.length > 0) {
//     let current = stack.pop();


//     if (current.val === target) {
//       return true;
//     }
//     if(current.left) stack.push(current.left);
//     if(current.right) stack.push(current.right);
    
//   }
//   return false;
// };
const treeIncludes = (root, target) => {
  //ITERATIVE - BFS
  if (root === null) return false;
  const queue = [root]; 
 
  while (queue.length > 0) {
    let current = queue.shift()
    if (current.val === target) return true;


    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  return false;
}






module.exports = {
  treeIncludes,
};

