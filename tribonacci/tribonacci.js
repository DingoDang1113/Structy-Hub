tribonacci(0); // -> 0
tribonacci(1); // -> 0
tribonacci(2); // -> 1
tribonacci(5); // -> 4
tribonacci(7); // -> 13
tribonacci(14); // -> 927
tribonacci(20); // -> 35890
tribonacci(37); // -> 1132436852
const tribonacci = (n, memo = {}) => {
  if ( n === 0 || n === 1) return 0; 
  if ( n === 2) return 1; 


  if (n in memo) return memo[n]; 


  memo[n] = tribonacci(n - 1, memo) + tribonacci (n - 2, memo) + tribonacci(n - 3, memo);


  return memo[n];
};


module.exports = {
  tribonacci,
};

