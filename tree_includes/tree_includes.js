// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const treeIncludes = (root, target) => {
  // iterative - DFS 
  if (root === null) return false;
  const stack = [root];


  while (stack.length > 0) {
    let current = stack.pop();


    if (current.val === target) {
      return true;
    }
    if(current.left) stack.push(current.left);
    if(current.right) stack.push(current.right);
    
  }
  return false;


  
  
  
};


module.exports = {
  treeIncludes,
};

