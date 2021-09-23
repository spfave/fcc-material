const translatePigLatin = require('../translate-pig-latin');

describe('Convert english word to pig latin', () => {
  describe('Words starting with consonants', () => {
    it('', () => {
      const word = 'california';
      const result = translatePigLatin(word);

      expect(result).toEqual('aliforniacay');
    });

    it('', () => {
      const word = 'glove';
      const result = translatePigLatin(word);

      expect(result).toEqual('oveglay');
    });

    it('', () => {
      const word = 'schwartz';
      const result = translatePigLatin(word);

      expect(result).toEqual('artzschway');
    });
  });

  describe('Words starting with vowels', () => {
    it('', () => {
      const word = 'algorithm';
      const result = translatePigLatin(word);

      expect(result).toEqual('algorithmway');
    });

    it('', () => {
      const word = 'eight';
      const result = translatePigLatin(word);

      expect(result).toEqual('eightway');
    });
  });

  describe('Words with no vowels', () => {
    it('', () => {
      const word = 'rhythm';
      const result = translatePigLatin(word);

      expect(result).toEqual('rhythmay');
    });
  });
});
