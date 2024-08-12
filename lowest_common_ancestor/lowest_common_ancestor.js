// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const lowestCommonAncestor = (root, val1, val2) => {
  // get path to val1 and val2 
  const path1 = getPath(root, val1);
  const path2 = getPath(root, val2);
  // check against path1 & path2 to find common node 
    // turn one path into set for better look up time 
  const set2 = new Set(path2);


  for (let val of path1) {
    if (set2.has(val)) return val;
  }
  
  // return the lowest level common node 
};


// create helper function to get path 
const getPath = (root, targetVal) => {
  //basecase null node
  if (root === null) return null;
  //basecase find target node 
  if (root.val === targetVal) return [ root.val ];


  // Recursively iterate on the left side 
  const left = getPath(root.left, targetVal);
  if (left !== null) {
    left.push(root.val);
    return left;
  };


  const right = getPath(root.right, targetVal);
  if (right !== null ) {
    right.push(root.val);
    return right;
  };
  
  //basecase no path find
  return null 
  
};


module.exports = {
  lowestCommonAncestor,
};

