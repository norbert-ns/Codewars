function bonusTime(salary, bonus) {
  if (bonus === true) {
    salary = salary * 10;
  } else {
    salary = salary;
  }
​
  return "£" + salary;
}
console.log(1000, true)