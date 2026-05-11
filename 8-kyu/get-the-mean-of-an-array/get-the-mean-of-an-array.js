function getAverage(marks){
  let total = 0
  for (let i = 0; i < marks.length; i++){
    total = total + marks[i]
      }
  return Math.floor(total/marks.length)
}
console.log(getAverage(10, 12, 3, 4, 5,6))