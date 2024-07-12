const overlapSubsequence = (str1, str2, i=0, j=0, memo={}) => {
  const key = i + ',' + j;
  if(key in memo) return memo[key];
  // basecase -> empty string
  if (i === str1.length  || j === str2.length) return false;
  
  // same letter 
  if (str1[i] === str2[j]) {
    
    memo[key] = 1 + overlapSubsequence(str1, str2, i+1, j+1, memo);
  } else {
    const str1Check = overlapSubsequence(str1, str2, i+1, j, memo);
    const str2Check = overlapSubsequence(str1, str2, i, j+1, memo);
    memo[key] = Math.max(str1Check, str2Check);
  }
  return memo[key];


  
  
};


module.exports = {
  overlapSubsequence,
};

