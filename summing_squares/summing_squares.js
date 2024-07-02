Given 12:


summingSquares(12) -> 3


The minimum squares required for 12 is three, by doing 4 + 4 + 4.


Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.
summingSquares(8); // -> 2
summingSquares(9); // -> 1
summingSquares(12); // -> 3
summingSquares(1); // -> 1
summingSquares(31); // -> 4
summingSquares(50); // -> 2
summingSquares(68); // -> 2
summingSquares(87); // -> 4
const summingSquares = (n, memo={}) => {
  // basecase -> visted n
  if (n in memo) return memo[n];
  // basecase -> n = 0 
  if (n === 0) return 0; 
  //track for the minSquare
  let minSquare = Infinity;


  // loop from 1 to squareroot of n
  for (let i = 1; i <= Math.sqrt(n); i++) {
    const square = i * i; 
    const numSquare = 1 + summingSquares(n - square, memo);
    minSquare = Math.min(minSquare, numSquare);
  }


  memo[n] = minSquare;




  return minSquare;


};


module.exports = {
  summingSquares,
};

