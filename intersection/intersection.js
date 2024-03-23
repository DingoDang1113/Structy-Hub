const intersection = (a, b) => {
  // todo
  const items = new Set();
  const result = [];
  
  //n iteration -> load a array into set (unique value)
  for (let item of a) {
    items.add(item);
  }
  
  // m iteration -> check if each element of b array is in items Set 
  for (let ele of b) {
     if (items.has(ele) ) {
       result.push(ele);
     }
  }
  
  return result;
  
  // O(n * m) - not the best efficient way
  // return a.filter(ele => 
  //   b.includes(ele)
  // )
};
​
module.exports = {
  intersection,
};
​