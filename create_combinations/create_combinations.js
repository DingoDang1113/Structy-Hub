const createCombinations = (items, k) => {
  
  if(k > items.length) return [];
  if(k === 0) return [[]]; 
  
  const first = items[0]; 
  const combosWithFirst = [];
  
  const subs = createCombinations(items.slice(1), k-1);


  for (let combo of subs) {
    combosWithFirst.push([first, ...combo]);
  }


  const subsWithoutFirst = createCombinations(items.slice(1), k);


  return [...combosWithFirst, ...subsWithoutFirst];
};


module.exports = {
  createCombinations,
};

