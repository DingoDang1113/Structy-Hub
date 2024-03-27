
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const reverseList = (head, prev = null) => {
  // INTERATIVE -> O(n) / O(1)
//   let current = head;
//   let prev = null;
  
//   while (current !== null) {
//     const next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
  
  //RECURSIVE ->  O(n)  / O(n)
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  
  return reverseList(next, head)
//   while (current !== null) {