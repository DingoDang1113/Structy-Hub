// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// const removeNode = (head, targetVal) => {
//   // ITERATIVE
//   if (head.val === targetVal) return head.next;
//   let current = head;
//   let prev = null;


//   while (current !== null ) {


//     if (current.val === targetVal) {
//       prev.next = current.next;
//       break;   // need to have break to only remove the first targetVal
//     }
//     prev = current;
//     current = current.next;
//   }


//   return head;
// };


const removeNode = (head, targetVal) => {
  // RECURSIVE
  if (head === null ) return null;
  if (head.val === targetVal) return head.next;


  head.next = removeNode(head.next, targetVal)
  return head;
  
};


module.exports = {
  removeNode,
};

