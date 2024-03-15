const uncompress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  const numbers = '0123456789';
  
  while (j < s.length) {
    
    if ( numbers.includes(s[j])) {
        j += 1;
      } else {
        const num = s.slice(i, j);
        for (let count = 0; count < num; count += 1) {
           result.push(s[j]);
        }
        j += 1;
        i = j;
      }
    }
    
    return result.join('');
  };
​
module.exports = {
  uncompress,
};
​