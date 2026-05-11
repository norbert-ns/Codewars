function mergeArrays(a, b) {
  let combined = [...a, ...b]
  let unique = [...new Set (combined)]
  return unique.sort((a,b) => a - b)
}
​