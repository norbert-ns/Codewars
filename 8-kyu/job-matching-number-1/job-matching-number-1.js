function match(candidate, job) {
  if (
    !candidate || candidate.minSalary == null ||
    !job || job.maxSalary == null
  ) {
    throw new Error('Not present');
  }
  const adjustedMinSalary = candidate.minSalary - (0.1* candidate.minSalary);
​
  return adjustedMinSalary <= job.maxSalary;
}
​
​