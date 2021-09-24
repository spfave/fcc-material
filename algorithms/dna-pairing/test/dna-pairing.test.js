const dnaPairing = require('../dna-pairing');

describe('Return paired DNA sequence', () => {
  it('', () => {
    const str = 'ATCGA';
    const result = dnaPairing(str);

    expect(result).toEqual([
      ['A', 'T'],
      ['T', 'A'],
      ['C', 'G'],
      ['G', 'C'],
      ['A', 'T'],
    ]);
  });

  it('', () => {
    const str = 'TTGAG';
    const result = dnaPairing(str);

    expect(result).toEqual([
      ['T', 'A'],
      ['T', 'A'],
      ['G', 'C'],
      ['A', 'T'],
      ['G', 'C'],
    ]);
  });

  it('', () => {
    const str = 'CTCTA';
    const result = dnaPairing(str);

    expect(result).toEqual([
      ['C', 'G'],
      ['T', 'A'],
      ['C', 'G'],
      ['T', 'A'],
      ['A', 'T'],
    ]);
  });
});
