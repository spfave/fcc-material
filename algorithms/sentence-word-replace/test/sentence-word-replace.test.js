const sentenceWordReplace = require('../sentence-word-replace');

describe('Replace word in sentence', () => {
  describe('before and after word are lowercase in all lower case', () => {
    it('', () => {
      const str = 'Let us go to the store';
      const result = sentenceWordReplace(str, 'store', 'mall');

      expect(result).toEqual('Let us go to the mall');
    });

    it('', () => {
      const str = 'This has a spellngi error';
      const result = sentenceWordReplace(str, 'spellngi', 'spelling');

      expect(result).toEqual('This has a spelling error');
    });
  });

  describe('before word is capital but after word is not', () => {
    it('', () => {
      const str = 'He is Sleeping on the couch';
      const result = sentenceWordReplace(str, 'Sleeping', 'sitting');

      expect(result).toEqual('He is Sitting on the couch');
    });

    it('', () => {
      const str = 'His name is Tom';
      const result = sentenceWordReplace(str, 'Tom', 'john');

      expect(result).toEqual('His name is John');
    });
  });

  describe('after word is capital but before word is not', () => {
    it('', () => {
      const str = 'I think we should look up there';
      const result = sentenceWordReplace(str, 'up', 'Down');

      expect(result).toEqual('I think we should look down there');
    });
  });
});
