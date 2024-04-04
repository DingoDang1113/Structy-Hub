// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const isUnivalueList = (head, prev = null) => {
  // Recursive
  if (head === null) return true;
  if (prev === null || prev === head.val) {
    return isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
  
};


// const isUnivalueList = (head) => {
//   // Iterative
//   let current = head;


//   while (current !== null) {
//     if (current.val !== head.val) {
//       return false
//     }
//     current = current.next;
//   }
//   return true;
// };


module.exports = {
  isUnivalueList,
};

