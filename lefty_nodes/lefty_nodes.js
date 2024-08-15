// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const leftyNodes = (root) => {
  if (root === null ) return [];


  const values = [];
  const stack = [{node: root, level: 0}];


  while(stack.length > 0) {
    const {node, level} = stack.pop();
    
    if (values.length === level) {
      values.push(node.val);
    }


    if(node.right !== null) {
      stack.push({node: node.right, level: level + 1})
    };


    if(node.left !== null ) {
      stack.push({node: node.left, level: level + 1})
    };
    
    
  }


  return values;
}




// const leftyNodes = (root) => {
//   // dfs - will traverse the tree in depth first 
  
//   const values = [];
//   traverse(root,0, values);
//   return values; 
    
//   }


//   const traverse = (root, level, values) => {
//     if (root === null) return ;
//     // make sure the first node of the level will get to pushed 
//     if (values.length === level ) {
//       values.push(root.val);
//     }
//     //make sure the trees are traversed from left to right 
//     traverse(root.left, level + 1, values);
//     traverse(root.right, level + 1, values);
  
// };


module.exports = {
  leftyNodes,
};

