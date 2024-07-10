const maxPalinSubsequence = (str, i=0, j=str.length-1, memo={}) => {
  let key = i + "," + j;
  if (key in memo) return memo[key];
  //basecase 1 - empty str
  if (i > j) return 0;
  // basecase 2 - str only has 1 letter
  if (i === j) return 1;
  // basecase 3 - first letter === second letter 
  if (str[i] === str[j]) {
    // if 1st and last letter matched, then check the str without the two match case


    memo[key] = 2 + maxPalinSubsequence(str, i+1, j-1, memo);
  } else {
    // else check the str in two directions: 
      // 1. move to the next letter of str with the same last letter
    const left = maxPalinSubsequence(str, i+1, j, memo);
      // 2. check the letter before last letter with the same first letter
    const right = maxPalinSubsequence(str, i, j-1, memo);
    
    memo[key] = Math.max( left , right );
  }


  return memo[key];


  
};


module.exports = {
  maxPalinSubsequence,
};

