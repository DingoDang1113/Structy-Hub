const parentheticalPossibilities = (s) => {
  if (s.length === 0) return [''];
  const {choices, remainder } = spliter(s);
  const suffiexs = parentheticalPossibilities(remainder);
  const result = [];
  
  for (let choice of choices) {
    for (let suffiex of suffiexs) {
      result.push (choice + suffiex)
    } 
  }


  return result;


};




//helper function to split strs inside () and outside
const spliter = (s) => {
  if (s[0] === "(") {
    const end = s.indexOf(")"); 
    // retrieve the full str inside of ()
    const choices = s.slice(1, end).split("");
    const remainder = s.slice(end + 1); 
    return { choices,
             remainder}
  } else {
    const choices = [s[0]];
    const remainder = s.slice(1);
    return {
      choices,
      remainder
    };
  };
  
};


module.exports = {
  parentheticalPossibilities,
};

