const decompressBraces = (s) => {
  const numbers = "123456789"
  const stack = [];


  for (let char of s) {
    if( numbers.includes(char) ) {
      stack.push(Number(char))
   } else {
      if (char === "}") {
        let segment = "";
        while(typeof stack[stack.length - 1] !== 'number') {
          const popped = stack.pop(); 
          segment = popped + segment;
        }
        const num = stack.pop();
        stack.push(repeat(segment, num));
      } else if(char !== "{") {
          stack.push(char);
      }
   }
      
    
}


  return stack.join("");
  
};


const repeat = (s, num) => {
  let result = "";


  for(let i = 0; i < num; i++) {
    result += s;
  }


  return result;
}


module.exports = {
  decompressBraces,
};

