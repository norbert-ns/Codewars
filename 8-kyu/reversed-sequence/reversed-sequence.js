const reverseSeq = n => {
  let i = 0;
  let sequence = []
  while (i<n){
    i++
    sequence.push(i)
  }
  return sequence.reverse();
};