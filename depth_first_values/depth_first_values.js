// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const depthFirstValues = (root) => {
  if(root === null) return []; 
  const left = depthFirstValues(root.left);
  const right = depthFirstValues(root.right);


  return [root.val, ...left, ...right];
}


// const depthFirstValues = (root) => {
//   // ITERATIVE 
//   if (root === null) return []; 
//   const result = []; 
//   const stack = [root]; 
//   while(stack.length > 0) {
//     let current = stack.pop();
//     result.push(current.val);
//     if(current.right) stack.push(current.right); 
//     if(current.left) stack.push(current.left);
//   }
//   return result;
// };


module.exports = {
  depthFirstValues,
};

