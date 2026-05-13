function getCount(str) {
  const match = str.match(/[aeiou]/gi);
​
  if (match == null) {
    return 0;
  } else {
    return match.length;
  }
}