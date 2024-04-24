// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const bottomRightValue = (root) => {
  // ITERATIVE - BFS 


  const queue = [root]; 
  let current = null; // keep current variable accessible outside of whilte loop


  while( queue.length > 0 ) {
    current = queue.shift();
    if(current.left !== null) queue.push(current.left);
    if(current.right !== null) queue.push(current.right); //make sure right thing leave later 
  }


  return current.val;
  
};


module.exports = {
  bottomRightValue,
};

