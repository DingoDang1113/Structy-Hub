const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  // different path, different moves -> hence is essential to keep the m in the key
  const pos = m + "," + kr + "," + kc;
  if (pos in memo) return memo[pos];
  //check for in bounds
  if (kr < 0 || kr >= n || kc < 0 || kc >= n) return 0;
  // if no steps left
  if ( m === 0) return (kr === pr && kc === pc) ? 1 : 0;


  const moves = [
    [ kr + 2, kc + 1 ],
    [ kr - 2, kc + 1 ],
    [ kr + 2, kc - 1 ],
    [ kr - 2, kc - 1 ],
    [ kr + 1, kc + 2 ],
    [ kr - 1, kc + 2 ],
    [ kr + 1, kc - 2 ],
    [ kr - 1, kc - 2 ],
  ] ;


  let count = 0;
  for (let move of moves) {
    const [nextR, nextC] = move;
    count += knightlyNumber(n, m - 1, nextR, nextC, pr, pc, memo);
  }


  memo[pos] = count;
  // return count;
  return memo[pos];


};


module.exports = {
  knightlyNumber
};

