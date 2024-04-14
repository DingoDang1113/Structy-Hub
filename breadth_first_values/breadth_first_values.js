// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// situation 1 - null roots return empty arr
// situation 2 - iterate non-null arr


const breadthFirstValues = (root) => {
  // Iterative -> time: O(n), space: O(n)
  if (root === null) return [];
  const queue = [root];
  const result = [];


  while(queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }


  return result;
  
};


module.exports = {
  breadthFirstValues,
};

