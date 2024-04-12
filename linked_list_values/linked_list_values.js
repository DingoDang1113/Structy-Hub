// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
const linkedListValues = (head) => {
  //RECURSIVE time: O(n) -> as result.push consider as O(1), space: O(n)
  const result = []; 
  _linkedListValues(head,result);
  // console.log("main",result)
  return result;
};


const _linkedListValues = (head,values) => {
  if (head === null) return; 
  values.push(head.val);
  // console.log("recurs",values)
  _linkedListValues(head.next, values);
}






// const linkedListValues = (head) => {
//   // Iterative -> time: O(n) / space: O(n)
//   const result = [];
//   let current = head; 


//   while(current !== null) {
//     result.push(current.val); 
//     current = current.next;
//   }


//   return result;
// };


module.exports = {
  linkedListValues,
};

