// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


const middleValue = (head) => {
  // declare an array variable that stores all the values from node 
  const result = []; 
  let current = head; 
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  // return the middle value of array 
  const mid = result.length % 2 === 0 ? 
    result.length / 2 : (result.length-1) /2 
  
  return result[mid];
};


module.exports = {
  middleValue,
};

