// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const longestStreak = (head, prevVal = null, count = 0, maxLen = 0) => {
  //Recursive -> Space O(n), O(n) time;
  if (head === null) return maxLen;
  if (head.val === prevVal) {
    count += 1;
  } else {
    count = 1;
  }


  maxLen = Math.max(maxLen, count);
  
  return  longestStreak(head.next, head.val, count, maxLen);
};


// const longestStreak = (head) => {
//   // Iterative  -> Better solution for Space of O(1)
//   let current = head;
//   let maxLen = 0;
//   let count = 0;
//   let prevVal = null;
 
//   while (current !== null ) {
//     if (current.val === prevVal) {
//       count += 1;
//     } else {
//       count = 1;
//     }


//     if ( count > maxLen ) maxLen = count;
//     prevVal = current.val; // need to store the value before node moves
//     current = current.next;
//   }
//   return maxLen; 
// };


module.exports = {
  longestStreak,
};

