const smallestComMult = require('../smallest-common-multiple');

describe('Compute lowest common multiple of two numbers', () => {
  it('', () => {
    const result = smallestComMult([1, 5]);
    expect(typeof result).toBe('number');
    expect(result).toEqual(60);
  });

  it('', () => {
    const result = smallestComMult([5, 1]);
    expect(result).toEqual(60);
  });

  it('', () => {
    const result = smallestComMult([10, 2]);
    expect(result).toEqual(2520);
  });

  it('', () => {
    const result = smallestComMult([1, 13]);
    expect(result).toEqual(360360);
  });

  it('', () => {
    const result = smallestComMult([23, 18]);
    expect(result).toEqual(6056820);
  });
});
