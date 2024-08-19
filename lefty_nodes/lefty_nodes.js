// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const leftyNodes = (root) => {
  // traverse in DFS to bring the first node of each level 


  // declare a variableto store the value of left nodes 
  const values = [];


  //CLOSURE 
  const traverse = (node, level) => {
    //basecase 
    if (node === null) return ;


    // when entering a new level 
    if (values[level] === undefined ) {
      values.push(node.val);
    };


    //make sure nodes are traverse from left to right;
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
    
  };


  // call the function 
  traverse(root, 0);


  // console.log(values)
  return values;


  
};


module.exports = {
  leftyNodes,
};

