const anagrams = (s1, s2) => {
  // todo
  if (s1.length != s2.length) return false;
  
  const hObj = {};
  let i = 0; 
  while (i < s1.length) {
    if (!hObj[s1[i]]) {
      hObj[s1[i]] = 1; 
      i += 1;
    } else {
      hObj[s1[i]] += 1;
      i += 1;
    }
  }
  
  for ( let j = 0; j < s2.length; j++) {
    if (hObj[s2[j]]) {
      hObj[s2[j]] -= 1;
    } else {
      return false;
    }
  }
  let result = Object.values(hObj).reduce((acc, a) => acc + a,0)
  
  return result === 0;
  
  
};
​
module.exports = {
  anagrams,
};
​
 return typeof Object.values(hObj)