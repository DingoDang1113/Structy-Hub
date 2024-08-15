//   }
// }


// const leftyNodes = (root) => {
//   if (root === null ) return [];


//   const values = [];
//   const stack = [{node: root, level: 0}];


//   while(stack.length > 0) {
//     const {node, level} = stack.pop();
    
//     if (values.length === level) {
//       values.push(node.val);
//     }


//     if(node.right !== null) {
//       stack.push({node: node.right, level: level + 1})
//     };


//     if(node.left !== null ) {
//       stack.push({node: node.left, level: level + 1})
//     };
    
    
//   }


//   return values;
// }




const leftyNodes = (root) => {
  // dfs - will traverse the tree in depth first 
  
  const values = [];
  // CLOSURE
  const traverse = (root, level) => {
      if (root === null) return ;
      // make sure the first node of the level will get to pushed 
      if (values.length === level ) {
        values.push(root.val);
      }
      //make sure the trees are traversed from left to right 
      traverse(root.left, level + 1);
      traverse(root.right, level + 1);
    
  };
  traverse(root,0);
  return values; 
    
  }




module.exports = {
  leftyNodes,
};

