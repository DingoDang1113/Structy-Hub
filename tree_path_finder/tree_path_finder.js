// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const pathFinder = (root, target) => {
  // RECURSION 
  if(root === null) return null; 
  if(root.val === target) return [root.val];


  const leftPath = pathFinder(root.left, target);
  if (leftPath !== null) return [root.val, ...leftPath];
  
  const rightPath = pathFinder(root.right, target);  
  if(rightPath !== null) return [root.val, ...rightPath];


  return null;


};


module.exports = {
  pathFinder,
};

