// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const flipTree = (root) => {
  if (root === null) return null;


  const left = flipTree(root.left);
  const right = flipTree(root.right); 


  root.left = right; 
  root.right = left;


  return root;


  
};


module.exports = {
  flipTree,
};

