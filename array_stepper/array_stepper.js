const arrayStepper = (nums, i=0, memo={}) => {
  // basecase - i equal to the last index 
  if (i === nums.length - 1) return true;
  // basecase - i has been visited 
  if (i in memo) return memo[i];


  // current num -> steps <= num[i]
  const maxStep = nums[i];
  // start step from 1 iterate all the possible steps til nums[i]
  for (let step = 1; step <= maxStep; step +=1) {
    if (arrayStepper(nums, i + step, memo) === true) {
      memo[i] = true; 
      return true;
    }
  }
  memo[i] = false;
  return false;
  
  
};


module.exports = {
  arrayStepper,
};

