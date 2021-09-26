const uniteUnique = require('../unite-unique');

describe('Combine arrays on unique values', () => {
  describe('', () => {
    it('', () => {
      const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

      expect(result.length).toEqual(5);
      expect(result).toEqual([1, 3, 2, 5, 4]);
    });

    it('', () => {
      const result = uniteUnique([1, 2, 3], [5, 2, 1]);

      expect(result.length).toEqual(4);
      expect(result).toEqual([1, 2, 3, 5]);
    });

    it('', () => {
      const result = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

      expect(result.length).toEqual(8);
      expect(result).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
    });
  });
});
