const sumPrimes = require('../sum-primes');

describe('Sum odd numbers of the Fibonacci sequence less than', () => {
  it('', () => {
    const result = sumPrimes(10);
    expect(typeof result).toBe('number');
    expect(result).toEqual(17);
  });

  it('', () => {
    const result = sumPrimes(977);
    expect(result).toEqual(73156);
  });
});
