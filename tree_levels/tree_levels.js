// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// const treeLevels = (root) => {
//   //Iterative - DFS 
//   if(root === null) return []; 
//   const levels = [];

//   const stack = [ {node: root, levelNum: 0} ];

//   while (stack.length > 0) {
//     const {node, levelNum} = stack.pop();

//     if(levels.length === levelNum) {
//       levels.push([node.val]);
//     } else {
//       levels[levelNum].push(node.val);
//     }

//     if (node.right) stack.push({node: node.right, levelNum: levelNum + 1}); //push right first to make left to go out of stack first 
//     if (node.left) stack.push({node: node.left, levelNum: levelNum + 1});
    
//   }

//   return levels;
// }


const treeLevels = (root) => {
  //RECURSION 
  const levels = [];
  _treeLevels(root, levels, 0);
  return levels;
}


const _treeLevels = (root, levels, levelNum) => {
  if (root === null) return ;


  if(levels.length === levelNum) {
    levels.push([root.val]);
  } else {
    levels[levelNum].push (root.val)
  }


  _treeLevels(root.left, levels, levelNum + 1);
  _treeLevels(root.right, levels, levelNum + 1);
  
}




// const treeLevels = (root) => {
//   // Iterative - BFS 
//   if (root === null) return []; 


//   const queue = [root];
//   const result = [];
  
//   while (queue.length > 0) {
//     const levelSize = queue.length;
//     const currentLevel = []; 


//     for (let i = 0; i < levelSize; i++) {
//       const current = queue.shift(); 
//       currentLevel.push(current.val);
//       if(current.left) queue.push(current.left);
//       if(current.right) queue.push(current.right);
//     }
//     result.push(currentLevel)
//   };
//   return result;
// };


module.exports = {
  treeLevels,
};

