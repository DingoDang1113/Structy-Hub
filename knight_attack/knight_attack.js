knightAttack(8, 1, 1, 2, 2); // -> 2
knightAttack(8, 1, 1, 2, 3); // -> 1
knightAttack(8, 0, 3, 4, 2); // -> 3
knightAttack(8, 0, 3, 5, 2); // -> 4
knightAttack(24, 4, 7, 19, 20); // -> 10
knightAttack(100, 21, 10, 0, 0); // -> 11
knightAttack(3, 0, 0, 1, 2); // -> 1
knightAttack(3, 0, 0, 1, 1); // -> null
const knightAttack = (n, kr, kc, pr, pc) => {
  const queue = [ [kr, kc, 0] ]; 
  const visited = new Set(); 
  visited.add(kr + "," + kc);


  while (queue.length > 0) {
    const[r, c, step] = queue.shift();
    if (r === pr && c === pc) return step;    
    const neighborPositions = knightPos(n, r, c);
    for (let neighborPos of neighborPositions) {
      const [neighborRow, neighborCol] = neighborPos;
      const neighborKey = neighborRow + "," + neighborCol;


      if(!visited.has(neighborKey)) {
        visited.add(neighborKey);
        queue.push([neighborRow, neighborCol, step + 1]);
      }
    }
  }
  return null;


};


const knightPos = (n, kr, kc) => {