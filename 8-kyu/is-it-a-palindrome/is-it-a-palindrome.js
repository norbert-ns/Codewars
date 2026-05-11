function isPalindrome(str) {
  let small = str.toLowerCase();
  let reversed = small.split("").reverse().join("");
​
  if (small === reversed) {
    return true;
  } else {
    return false;
  }
}