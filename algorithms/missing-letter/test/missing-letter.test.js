const missingLetter = require('../missing-letter');

describe('Find missing letter in alphabetic character sequence', () => {
  it('', () => {
    const str = 'abce';
    const result = missingLetter(str);

    expect(result).toEqual('d');
  });

  it('', () => {
    const str = 'abcdefghjklmno';
    const result = missingLetter(str);

    expect(result).toEqual('i');
  });

  it('', () => {
    const str = 'stvwx';
    const result = missingLetter(str);

    expect(result).toEqual('u');
  });

  it('', () => {
    const str = 'bcdf';
    const result = missingLetter(str);

    expect(result).toEqual('e');
  });

  it('', () => {
    const str = 'abcdefghijklmnopqrstuvwxyz';
    const result = missingLetter(str);

    expect(result).toEqual(undefined);
  });
});
