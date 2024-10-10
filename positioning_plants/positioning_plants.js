const positioningPlants = (costs, pos = 0, lastPos = null, memo = {}) => {
  const key = pos + ',' + lastPos;
  if (key in memo) return memo[key];
  
  if (pos === costs.length) return 0; 


  let min = Infinity; 


  for (let plant = 0; plant < costs[pos].length; plant += 1) {
    if (plant !== lastPos) {
      const cost = costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo);
      min = Math.min(min, cost);
    }
  }


  memo[key] = min;
  return min;


  
};


module.exports = {
  positioningPlants,
};

