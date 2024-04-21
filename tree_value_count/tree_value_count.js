// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const treeValueCount = (root, target) => {
  // ITERATIVE - DFS 
  if (root === null) return 0;
  const stack = [root]; 
  let count = 0; 


  while (stack.length > 0) {
    let current = stack.pop(); 


    if(current.val === target) {
      count += 1;
    }


    if(current.left) stack.push(current.left);
    if(current.right) stack.push(current.right);
    
  }


  return count;


  
};


module.exports = {
  treeValueCount,
};

