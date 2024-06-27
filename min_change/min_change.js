minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
minChange(13, [1, 9, 5, 14, 30]); // -> 5
minChange(23, [2, 5, 7]); // -> 4
minChange(102, [1, 5, 10, 25]); // -> 6
minChange(200, [1, 5, 10, 25]); // -> 8
minChange(2017, [4, 2, 10]); // -> -1
minChange(271, [10, 8, 265, 24]); // -> -1
minChange(0, [4, 2, 10]); // -> 0
minChange(0, []); // -> 0
// const minChange = (amount, coins) => {
//   const changes = Array(amount + 1).fill(Infinity); 
//   changes[0] = 0;


//   for (let i = 1; i <= amount; i++) {
//     for (let coin of coins) {
//       if(i - coin >= 0 && changes[i - coin] !== Infinity) {
//         changes[i] = Math.min(changes[i], changes[i - coin] + 1);
//       }
//     }
//   }


//   // console.log(changes)
//   return changes[amount] === Infinity ? -1 : changes[amount];


  
// };


const minChange = (amount, coins) => {
  const result = _minChange(amount, coins)
  return result === Infinity ? -1 : result;
  
};


const _minChange = (amount, coins, memo = {}) => {
  if (amount === 0) return 0; 
  if (amount < 0 ) return Infinity; 
  if (amount in memo) return memo[amount]; 
  
  let minCoins = Infinity;
  for (let coin of coins) {
    const numCoins = _minChange(amount - coin, coins, memo);
    if (numCoins !== Infinity ) {
      minCoins = Math.min(numCoins + 1, minCoins)
    }
  }


  memo[amount] = minCoins;
  return minCoins;
  
};


module.exports = {
  minChange,
};

