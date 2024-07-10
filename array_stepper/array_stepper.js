const arrayStepper = (nums, i=0, memo={}) => {
  // basecase - i reach last num 
  if (i === nums.length - 1) return true; 
  // basecase - i has been visted
  if (i in memo) return memo[i];


  // declare max step as num[i] as steps <= nums[i]
  const maxStep = nums[i]


  for (let step = 1; step <= maxStep; step ++) {
    if (arrayStepper(nums, i + step, memo) === true) {
      memo[i] = true
      return true
    }
  }


  memo[i] = false;
  return false;


  
};


module.exports = {
  arrayStepper,
};

