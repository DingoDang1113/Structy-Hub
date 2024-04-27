// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const levelAverages = (root) => {
  // Iterative - BFS 
  if(root === null) return [];
  const queue = [root];
  const resultAvg = []; 


  while(queue.length > 0) {
    const levelSize = queue.length; 
    let sum = 0;


    for(let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      sum += current.val;
   
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    resultAvg.push(sum / levelSize);
    
  };
  return resultAvg;
};


module.exports = {
  levelAverages,
};

