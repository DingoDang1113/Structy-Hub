// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const sumList = (head) => {
  // Iterative 
  let total = 0; 
  let current = head; 


  while(current !== null) {
    total += current.val; 
    current = current.next;
  }
  return total;
};


module.exports = {
  sumList,
};

