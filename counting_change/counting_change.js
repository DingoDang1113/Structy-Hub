For example,


countingChange(4, [1,2,3]) -> 4


There are four different ways to make an amount of 4:


1. 1 + 1 + 1 + 1
2. 1 + 1 + 2
3. 1 + 3
4. 2 + 2
countingChange(4, [1, 2, 3]); // -> 4
countingChange(8, [1, 2, 3]); // -> 10
countingChange(24, [5, 7, 3]); // -> 5
countingChange(13, [2, 6, 12, 10]); // -> 0
countingChange(512, [1, 5, 10, 25]); // -> 20119
countingChange(1000, [1, 5, 10, 25]); // -> 142511
countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9]); // -> 1525987916
const countingChange = (amount, coins,i=0, memo={}) => {
  //basecase amount = 0 
  if (amount === 0) return 1; 
  // 1 + 2 + 1 = 2 + 1 + 1
  const key = amount + ',' + i;
  if (key in memo) return memo[key];
  // remainder = coin * qty
  const coin = coins[i];


  let total = 0;
  for(let qty = 0; qty * coin <= amount; qty++) {
    const remainder = amount - coin * qty;
    total += countingChange(remainder, coins, i+1, memo);
  }


  memo[key] = total;
  return total;
};


module.exports = {
  countingChange,
};

