const sumArray = (array) => {
  if (!array || array.length <= 2) {
    return 0;
  }
  const min = Math.min(...array);
  const max = Math.max(...array);
​
  let total = 0;
​
  array.forEach((num) => {
    total += num;
  });
  return total - min - max;
};