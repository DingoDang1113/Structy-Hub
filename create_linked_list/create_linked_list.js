class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


const createLinkedList = (values) => {
  // RECURSIVE - 1 
  // base case to stop recursion
  if (values.length === 0) return null;
  // set head with first element in arr
  const head = new Node(values[0]);
  //append next node thru head.next
  head.next = createLinkedList(values.slice(1)) 
  // return head 
  return head;
};


// const createLinkedList = (values) => {
//   // ITERATIVE


//   // create the head of linkedList for .next 
//   const dummyHead = new Node(null);
//   let tail = dummyHead;


//   // iterate through the array to append the new Node(value) to tail 
//   for (let val of values) {
//     tail.next = new Node(val);  // append the new node to current node
//     // move tail to its next node
//     tail = tail.next;
//   }


//   return dummyHead.next;
// };


module.exports = {
  createLinkedList,
};

