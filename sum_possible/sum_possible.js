sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
sumPossible(15, [6, 2, 10, 19]); // -> false
sumPossible(13, [6, 2, 1]); // -> true
sumPossible(103, [6, 20, 1]); // -> true
sumPossible(12, []); // -> false
sumPossible(12, [12]); // -> true
sumPossible(0, []); // -> true
sumPossible(271, [10, 8, 265, 24]); // -> false
sumPossible(2017, [4, 2, 10]); // -> false
sumPossible(13, [3, 5]); // -> true
sumPossible(10, [4, 5, 7]); // -> true
const sumPossible = (amount, numbers, memo = {} ) => {
  // create a boolean array to store results of sub problems
  const dp = Array(amount + 1).fill(false); 
  dp[0] = true; // basecase 0 is always achieveable 


  // Iterate number from 1 to amount, for each i iterate through num in Numbers
  for (let i = 1; i <= amount; i++) {
    for (let num of numbers) {
      if (i - num >= 0 && dp[i - num]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[amount];


  // console.log(dp[amount])
  
}




// const sumPossible = (amount, numbers, memo = {} ) => {
//   // basecase 1 - amount = 0 as null can achieve this  
//   if (amount === 0) return true;
//   // basecase 2 - amount < 0 (can't be negative)
//   if (amount < 0 ) return false; 
//   // basecase 3 - amount is in memo, use that value to avoid repetitive calculation
//   if (amount in memo) return memo[amount]; 


//   for (let num of numbers) {
//     if (sumPossible(amount - num, numbers, memo) === true) {
//       memo[amount] = true;
//       return true;
//     }
//   }
//   memo[amount] = false;
//   return false;


//   // console.log(memo)


// };


// sumPossible(8, [5, 12, 4])


module.exports = {
  sumPossible,