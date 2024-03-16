
const compress = (s) => {
  // todo
  let result = [];
  let i = 0;
  let j = 0; 
  
  while (j <= s.length) {
    
    if (s[i] === s[j]) {
      j += 1; 
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(num, s[i]);
      }
      i = j;
      
    }
    
  }
  
  
  return result.join('');
  
};
​
module.exports = {
  compress,
};