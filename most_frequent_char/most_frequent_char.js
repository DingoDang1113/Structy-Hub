
const mostFrequentChar = (s) => {
  // todo
  
  const count = {};
  
  for (let char of s) {
    if (!(count[char])) {
        count[char] = 1;
        } else {
          count[char] += 1;
        }
  }
  
  let max = 0;
  let result = "";
  for (let char in count) {
    if (count[char] > max) {
      max = count[char];
      result = char;
    } 
  }
  
  return result;
  
  
};
​
module.exports = {
  mostFrequentChar,
};
​