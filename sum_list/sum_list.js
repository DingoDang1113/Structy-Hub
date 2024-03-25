
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const sumList = (head) => {
  // todo
// ITERATIVE 
//   let total = 0;
//   let current = head;
  
//   while (current !== null) {
//     total += current.val;
//     current = current.next;
//   }
  
//   return total;
​
// RECURSION
  // let total = 0;    No need to declare total as val + sumList(head.next)
  
  if (head === null) return 0;
  return head.val + sumList(head.next);
  
  // return total;
};
​
module.exports = {
  sumList,