function sumFibonacci(num) {
  if (num < 0) return undefined;

  let [prevNum, currNum, sum] = [0, 1, 0];

  while (currNum <= num) {
    if (isOdd(currNum)) sum += currNum;

    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return sum;
}

function isOdd(num) {
  return num % 2 !== 0;
}

module.exports = sumFibonacci;

console.log(sumFibonacci(0));
