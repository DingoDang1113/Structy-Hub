// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const leftyNodes = (root) => {
  const values = []; 


  // traverse thru nodes 
  const traverse = (node, level) => {
    if (node === null ) return;


    // 
    if (values[level] === undefined) {
      values.push(node.val);
    }


    // make sure nodes traverse from left to right 
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
    
  };


  traverse(root, 0);


  return values;


  


  
};


module.exports = {
  leftyNodes,
};

