const pairProduct = (numbers, targetProduct) => {
  // todo
  
  const previousNums = {};
  
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let divider = targetProduct / num;
    
    if ( divider in previousNums ) {
      return [i, previousNums[divider]];
    }
    
    previousNums[num] = i;
    
    
  }
};
​
module.exports = {
  pairProduct,
};
​