// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
const linkedListFind = (head, target) => {
  //RECURSION 
  if (head === null) return false; 


  if (head.val === target) return true;


  return linkedListFind(head.next, target);
  
  
}
// const linkedListFind = (head, target) => {
//   // ITERATIVE - time: O(n), space: 0(n)
//   let current = head; 
//   while( current !== null) {
//     if (current.val === target) return true;
//     current = current.next;
//   }
//   return false;
// };


module.exports = {
  linkedListFind,
};

