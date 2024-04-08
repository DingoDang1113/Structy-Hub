class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


const createLinkedList = (values) => {
  // ITERATIVE


  // create the head of linkedList for .next 
  const dummyHead = new Node(null);
  let tail = dummyHead;


  // iterate through the array to link the new Node(value) to tail 
  for (let val of values) {
    tail.next = new Node(val);
    // move tail to its next node
    tail = tail.next;
  }


  return dummyHead.next;


  
};


module.exports = {
  createLinkedList,
};

