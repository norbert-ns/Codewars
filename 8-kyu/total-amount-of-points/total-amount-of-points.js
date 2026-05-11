const points = games => {
  let total = 0;
​
  for (let i = 0; i < games.length; i++) {
    let score = games[i].split(':');
    let x = Number(score[0]);
    let y = Number(score[1]);
​
    if (x > y) {
      total += 3;
    } else if (x === y) {
      total += 1;
    }
  }
​
  return total;
};