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
  // basecase 1 - amount = 0 as null can achieve this  
  if (amount === 0) return true;
  // basecase 2 - amount < 0 (can't be negative)
  if (amount < 0 ) return false; 
  // basecase 3 - amount is in memo, use that value to avoid repetitive calculation
  if (amount in memo) return memo[amount]; 


  for (let num of numbers) {
    if (sumPossible(amount - num, numbers, memo) === true) {
      memo[amount] = true;
      return true;
    }
  }
  // console.log(memo)
  memo[amount] = false;
  return false;


};


sumPossible(8, [5, 12, 4])


module.exports = {
  sumPossible,
};

