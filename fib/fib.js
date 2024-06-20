fib(0); // -> 0
fib(1); // -> 1
fib(2); // -> 1
fib(3); // -> 2
fib(4); // -> 3
fib(5); // -> 5
fib(35); // -> 9227465
fib(46); // -> 1836311903
const fib = (n, memo = {}) => {
  if ( n === 0 || n === 1) return n; 


  if (n in memo) return memo[n];


  
  memo[n] = fib(n - 2, memo) + fib(n - 1, memo);


  return memo[n];
  
};


module.exports = {
  fib,
};

