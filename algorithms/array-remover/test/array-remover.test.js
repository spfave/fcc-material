const arrayRemover = require('../array-remover');

describe('Array entry remover', () => {
  describe('Arrays includes arguments to remove - Should return array with arguments removed', () => {
    it('', () => {
      const arr = [1, 2, 3, 1, 2, 3];
      const args = [2, 3];

      const result = arrayRemover(arr, ...args);

      expect(result.length).toEqual(2);
      expect(result).toEqual([1, 1]);
    });

    it('', () => {
      const arr = [1, 2, 3, 5, 1, 2, 3];
      const args = [2, 3];

      const result = arrayRemover(arr, ...args);

      expect(result.length).toEqual(3);
      expect(result).toEqual([1, 5, 1]);
    });

    it('', () => {
      const arr = [3, 5, 1, 2, 2];
      const args = [2, 3, 5];

      const result = arrayRemover(arr, ...args);

      expect(result.length).toEqual(1);
      expect(result).toEqual([1]);
    });
  });

  describe('Array includes only arguments to be removed - Should return an empty array', () => {
    it('', () => {
      const arr = [2, 3, 2, 3];
      const args = [2, 3];

      const result = arrayRemover(arr, ...args);

      expect(result.length).toEqual(0);
      expect(result).toEqual([]);
    });
  });

  describe('Array includes no arguments to be removed - Should return original array', () => {
    it('', () => {
      const arr = [1, 'dog', 9, true];
      const args = ['cat', 17, false];

      const result = arrayRemover(arr, ...args);

      expect(result.length).toEqual(4);
      expect(result).toEqual([1, 'dog', 9, true]);
    });
  });
});
