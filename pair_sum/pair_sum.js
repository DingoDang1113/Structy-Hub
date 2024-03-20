const pairSum = (numbers, targetSum) => {
  // todo
  const result = [];
  const nums = {};
  
  for (let i = 0; i < numbers.length; i++) {
    let remain = targetSum - numbers[i];
    if(remain in nums) { 
      return [nums[remain], i];
    } 
      nums[numbers[i]] = i;
  }
};
​
module.exports = {
  pairSum,
};
​