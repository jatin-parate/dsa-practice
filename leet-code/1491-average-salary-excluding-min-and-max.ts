import assert from "assert";

function average(salary: number[]): number {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  salary.forEach((num) => {
    min = Math.min(min, num);
    max = Math.max(max, num);
    sum += num;
  });

  sum -= min + max;

  return sum / (salary.length - 2);
}

assert.equal(average([4000, 3000, 1000, 2000]), 2500);
assert.equal(average([1000, 2000, 3000]), 2000.0);
