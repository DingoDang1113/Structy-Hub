const maxIncreasingSubseq = (numbers, i = 0, prevNum = -Infinity, memo={}) => {
  const key = i + "," + prevNum;
  if (key in memo) return memo[key];
  
  if (i === numbers.length ) return 0; 
  const current = numbers[i]; 
  const options = [];


  const notTakeCurrent = maxIncreasingSubseq(numbers, i + 1, prevNum, memo);
  options.push( notTakeCurrent);


  if (current > prevNum) {
    const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
    options.push(takeCurrent)
  }
  
  memo[key] = Math.max(...options);
  return memo[key];
  
  
};


module.exports = {
  maxIncreasingSubseq,
};

