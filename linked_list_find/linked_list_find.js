
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const linkedListFind = (head, target) => {
  // todo
  // RECURSIVE
  if (head && head.val === target) return true;
  if (head === null) return false;
  // head.val === target;
  return linkedListFind(head.next, target); // remember to add all params
  
  //ITERATIVE - better solution with space(1)
  // let current = head;
  // while (current !== null ) {
  //   if(current.val === target ) {
  //     return true;
  //   } 
  //   current = current.next;
  //   
  // }
  // return false;
  