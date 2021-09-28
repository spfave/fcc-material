const sumPrimes = require('../sum-primes');

describe('Sum prime numbers les than input', () => {
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
