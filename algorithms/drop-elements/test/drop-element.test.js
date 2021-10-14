const dropElements = require('../drop-element');

describe('Return array only with entries that pass filter function', () => {
  it('', () => {
    const result = dropElements([1, 2, 3, 4], (n) => n >= 3);
    expect(result).toEqual([3, 4]);
    expect(result.length).toEqual(2);
  });

  it('', () => {
    const result = dropElements([0, 1, 0, 1], (n) => n === 1);
    expect(result).toEqual([1, 0, 1]);
    expect(result.length).toEqual(3);
  });

  it('', () => {
    const result = dropElements([1, 2, 3], (n) => n > 0);
    expect(result).toEqual([1, 2, 3]);
    expect(result.length).toEqual(3);
  });

  it('', () => {
    const result = dropElements([1, 2, 3, 4], (n) => n > 5);
    expect(result).toEqual([]);
    expect(result.length).toEqual(0);
  });

  it('', () => {
    const result = dropElements([1, 2, 3, 7, 4], (n) => n > 3);
    expect(result).toEqual([7, 4]);
    expect(result.length).toEqual(2);
  });

  it('', () => {
    const result = dropElements([1, 2, 3, 9, 2], (n) => n > 2);
    expect(result).toEqual([3, 9, 2]);
    expect(result.length).toEqual(3);
  });
});
