const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


//      a
//    /   \
//   b     c
//  / \     \
// d   e     f


leafList(a); // -> [ 'd', 'e', 'f' ] 
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;


//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h


leafList(a); // -> [ 'd', 'g', 'h' ]
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;


//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3


leafList(a); // -> [ 20, 1, 3, 54 ]
const x = new Node('x');


//      x


leafList(x); // -> [ 'x' ]
leafList(null); // -> [ ]
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


const leafList = (root) => {
  // RECURSION - need to keep the format of edge cases consistent
  if (root === null) return [];
  if (root.left === null && root.right === null) return [root.val];


  return [...leafList(root.left), ...leafList(root.right)];


  
}


// const leafList = (root) => {
//   // iterative - BFS 


//   const queue = [root]; 
  
  


  
// };


module.exports = {
  leafList,
};

