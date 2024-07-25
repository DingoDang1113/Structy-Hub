const reverseString = (s, i=s.length - 1) => {
  if (i < 0) return "";
  if(i === 0) return s[i];
  
  return s[i] + reverseString(s, i - 1);
};


module.exports = {
  reverseString,
};

