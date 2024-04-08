class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index, count = 0) => {
  // RECURSIVE 
  if (head === null) return null;
  
  if (index === 0 ) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }   
  if (count === index - 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }


  insertNode(head.next, value, index, count + 1);
  return head;
};




// const insertNode = (head, value, index) => {
//   // ITERATIVE 
//   if ( index === 0 ) {
//     const newHead = new Node(value)
//     newHead.next= head;
//     return newHead;
//   } 
//   let current = head; 
//   let count = 0; 


//   while (current !== null ) {   
//     if (count === index - 1 ) {
//       const holder = current.next;
//       current.next = new Node(value); //value need to be in Node format
//       current.next.next = holder;
//     }    
//     count += 1;
//     current = current.next;
//   }


//   return head;
// };


module.exports = {
  insertNode,
};

