// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const flipTree = (root) => {
  if (root === null) return null; 


  const left = flipTree(root.right);
  const right = flipTree(root.left);


  root.left = left;
  root.right = right;


  return root;


  
};


module.exports = {
  flipTree,
};

