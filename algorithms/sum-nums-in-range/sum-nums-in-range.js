//  For loop implementation
/* function sumNumsInRange(arr) {
  const arrNums = [...arr];
  arrNums.sort((a, b) => a - b);

  let sum = 0;
  for (let i = arrNums[0]; i <= arrNums[1]; i++) {
    sum += i;
  }
  return sum;
} */

// Using arithmetic progression formula
function sumNumsInRange(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const numBetween = max - min + 1;
  const sum = ((min + max) * numBetween) / 2;
  return sum;
}

module.exports = sumNumsInRange;
