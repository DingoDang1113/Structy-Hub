// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const isUnivalueList = (head) => {
  // todo
  let current = head;


  while (current.next !== null) {
    if (current.val !== current.next.val) {
      return false
    }
    current = current.next;
  }
  return true;


  
};


module.exports = {
  isUnivalueList,
};

