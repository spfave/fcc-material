function sumPrimes(num) {
  if (num <= 1) return undefined;

  let sum = 0;
  for (let n = 2; n <= num; n++) {
    if (isPrime(n)) sum += n;
  }

  return sum;
}

function isPrime(num) {
  for (let n = 2; n <= Math.sqrt(num); n++) {
    if (num % n === 0) return false;
  }
  return true;
}

module.exports = sumPrimes;
