const quickestConcat = (s, words) => {
  const answer = _quickestConcat(s, words);


  if (answer === Infinity) {
    return -1;
  } else {
    return answer;
  }
}


const _quickestConcat = (s, words, memo={}) => {


  if (s in memo) return memo[s];
  if (s === "") return 0; 


  let minWords = Infinity;
  for (let word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length)
      const attempt = 1 + _quickestConcat(suffix, words, memo)
      minWords = Math.min(attempt, minWords);
    }
  }
  memo[s] = minWords;
  return minWords;




  
};


module.exports = {
  quickestConcat,
};

