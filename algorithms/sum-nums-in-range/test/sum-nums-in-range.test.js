const sumNumsInRange = require('../sum-nums-in-range');

describe('Sum Numbers in Range', () => {
  describe('Array in ascending order', () => {
    it('Should return sum for numbers in range inclusive', () => {
      const arr1 = [1, 4];
      const arr2 = [7, 10];

      expect(sumNumsInRange(arr1)).toEqual(10);
      expect(sumNumsInRange(arr2)).toEqual(34);
    });
  });

  describe('Array in descending order', () => {
    it('Should return sum for numbers in range inclusive', () => {
      const arr1 = [4, 1];
      const arr2 = [10, 7];

      expect(sumNumsInRange(arr1)).toEqual(10);
      expect(sumNumsInRange(arr2)).toEqual(34);
    });
  });
});
