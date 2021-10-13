function smallestComMult(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => min + i);
  return range.reduce((a, b) => lcm(b, a));
}

/* Lowest Common Multiple - Using GCD calculation
 * https://en.wikipedia.org/wiki/Least_common_multiple */
const lcm = (a, b) => (a / gcd(a, b)) * b;

/* Greatest Common Divisor - Euclidean algorithm
 * https://en.wikipedia.org/wiki/Greatest_common_divisor */
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

module.exports = smallestComMult;

// Testing
console.log(gcd(48, 18));
