class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


// const linkedPalindrome = (head) => {
//   // edgecase - make sure linkedlist is not empty 
//   if(!head || head.next === null) return true; 
//   let result = []; 
//   let current = head; 
//   // iterate every node from linkedlist and push it to the array
//   while(current !== null) {
//     result.push(current.val);
//     current = current.next;
//   }


//   return result.join(',') === result.reverse().join(',');
// };


const linkedPalindrome = (head) => {
  if (!head || head.next === null) return true; 
  let current = head; 
  //create a new linked list with newhead === the last node from head
  let newHead = null;
  // append the list backward 
  while (current) {
    const newNode = new Node(current.val);
    newNode.next = newHead
    newHead = newNode;
    current = current.next;
  }
  console.log(newHead)
  // check against if the new list is equal to the head
  while(head && newHead) {
    if (head.val !== newHead.val) return false; 
    head = head.next; 
    newHead = newHead.next;
  }


  return true;
};






module.exports = {
  linkedPalindrome,
};

