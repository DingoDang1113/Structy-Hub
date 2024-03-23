const intersection = (a, b) => {
  // todo
  return a.filter((ele) => 
    b.includes(ele)
  )
};
​
module.exports = {
  intersection,
};
​