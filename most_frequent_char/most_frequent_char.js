const mostFrequentChar = (s) => {
  // todo
  
  const count = {};
  
  for (let char of s) {
    if (!(count[char])) {
        count[char] = 0;
        } 
        
    count[char] += 1;
        
  }
  
  let result = "";
  for (let char in count) {
    if (result === "" ||count[char] > count[result]) {
      result = char;
    } 
  }
  
  return result;
  
  
};


module.exports = {
  mostFrequentChar,
};

