// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const leafList = (root) => {
  // RECURSION - need to keep the format of edge cases consistent
  if (root === null) return [];
  if (root.left === null && root.right === null) return [root.val];


  return [...leafList(root.left), ...leafList(root.right)];


  
}


// const leafList = (root) => {
//   // iterative - BFS 


//   const queue = [root]; 
  
  


  
// };


module.exports = {
  leafList,
};

