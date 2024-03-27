// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const getNodeValue = (head, index) => {
  // todo
  const arr = [];
  let current = head;
  
  while(current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  
  
  return arr[index] || null;
};
​
module.exports = {
  getNodeValue,
};
​