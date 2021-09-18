const diffTwoArrays = require('../diff-two-arrays');

describe('Difference of Two Arrays', () => {
  describe('Arrays with differences - Should return unique entries to each array', () => {
    it('', () => {
      const arr1 = [1, 2, 3, 5];
      const arr2 = [1, 2, 3, 4, 5];

      const result = diffTwoArrays(arr1, arr2);

      expect(result.length).toEqual(1);
      expect(result).toEqual([4]);
    });

    it('', () => {
      const arr1 = ['diorite', 'grass', 'dirt', 'pink wool', 'dead shrub'];
      const arr2 = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'];

      const result = diffTwoArrays(arr1, arr2);

      expect(result.length).toEqual(2);
      expect(result).toEqual(['pink wool', 'andesite']);
    });
  });

  describe('Identical arrays - Should return an empty array', () => {
    it('', () => {
      const arr1 = ['andesite', 'grass', 'dirt', 'dead shrub'];
      const arr2 = ['andesite', 'grass', 'dirt', 'dead shrub'];

      const result = diffTwoArrays(arr1, arr2);

      expect(result.length).toEqual(0);
      expect(result).toEqual([]);
    });
  });

  describe('Each array completely unique - Should return the arrays concatenated', () => {
    it('', () => {
      const arr1 = [];
      const arr2 = ['snuffleupagus', 'cookie monster', 'elmo'];

      const result = diffTwoArrays(arr1, arr2);

      expect(result.length).toEqual(3);
      expect(result).toEqual(['snuffleupagus', 'cookie monster', 'elmo']);
    });

    it('', () => {
      const arr1 = [1, 'calf', 3, 'piglet'];
      const arr2 = [7, 'filly'];

      const result = diffTwoArrays(arr1, arr2);

      expect(result.length).toEqual(6);
      expect(result).toEqual([1, 'calf', 3, 'piglet', 7, 'filly']);
    });
  });
});
