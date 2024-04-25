// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
const allTreePaths = (root) => {
  if(root === null) return [];
  if (root.left === null && root.right === null) return [ [root.val] ];


  const result = []; 


  const leftSubs = allTreePaths(root.left);
  const rightSubs = allTreePaths(root.right); 


  for (let subs of leftSubs) {
    result.push([root.val, ...subs]);
  };


  for (let subs of rightSubs) {
    result.push([root.val, ...subs]);
  }


  return result;
  
}


// const allTreePaths = (root) => {
//   // ITERATIVE - DFS 


//   const stack = [root]; 
//   const result = []; 


//   while(stack.length > 0) {
//     let current = stack.pop(); 


//     // if(current.left === null && current.right === null) {
//       result.push([current.val]);
//     // } 
    
//   }


//   return result;


  
// };


module.exports = {
  allTreePaths,
};

