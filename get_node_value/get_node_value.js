// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// Situation 1 -> index exits  => return node.val
// Situation 2 -> index does not exits => return null;


const getNodeValue = (head, index) => {
  //RECURSION 
  if (head === null) return null; 
  if (index === 0) return head.val; 


  return getNodeValue(head.next, index -1);
}


// const getNodeValue = (head, index) => {
//   // ITERATIVE -> time: O(n), space: O(1) 
//   let count = 0; 
//   let current = head; 


//   while( current !== null) {
//     if (count === index) {
//       return current.val;
//     } 
//     count += 1; 
//     current = current.next;
//   }
//   return null;
// };


module.exports = {
  getNodeValue,
};

