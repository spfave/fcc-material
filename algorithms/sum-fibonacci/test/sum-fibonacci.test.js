const sumFibonacci = require('../sum-fibonacci');

describe('Sum odd numbers of the Fibonacci sequence less than', () => {
  it('', () => {
    const result = sumFibonacci(1);
    expect(typeof result).toBe('number');
    expect(result).toEqual(2);
  });

  it('', () => {
    const result = sumFibonacci(4);
    expect(result).toEqual(5);
  });

  it('', () => {
    const result = sumFibonacci(1000);
    expect(result).toEqual(1785);
  });

  it('', () => {
    const result = sumFibonacci(75024);
    expect(result).toEqual(60696);
  });

  it('', () => {
    const result = sumFibonacci(75025);
    expect(result).toEqual(135721);
  });

  it('', () => {
    const result = sumFibonacci(4000000);
    expect(result).toEqual(4613732);
  });
});
