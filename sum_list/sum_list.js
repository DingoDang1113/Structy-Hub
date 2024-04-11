// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const sumList = (head) => {
  //RECURSION 
  if (head === null) return 0; 
  return head.val + sumList(head.next);
  
}


// const sumList = (head) => {
//   // Iterative time: O(n), space: O(1)
//   let total = 0; 
//   let current = head; 


//   while(current !== null) {
//     total += current.val; 
//     current = current.next;
//   }
//   return total;
// };


module.exports = {
  sumList,
};

