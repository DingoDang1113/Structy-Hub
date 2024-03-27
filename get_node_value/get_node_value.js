
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const getNodeValue = (head, index) => {
  // ITERATIVE => O(n)/ O(1)
//   let count = 0;
//   let current = head;
  
//   while(current !== null) {
//     if (count === index) {
//       return current.val;
//     }
//     count += 1;
//     current = current.next;
//   }
  
//   return null;
// };
  
  //RECURSIVE O(n)/ O(n)
​
  if (head === null) return null;