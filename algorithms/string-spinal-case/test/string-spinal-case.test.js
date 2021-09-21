const stringToSpinalCase = require('../string-spinal-case');

describe('Convert string to spinal case', () => {
  it('', () => {
    const str = 'This Is Spinal Tap';
    const result = stringToSpinalCase(str);

    expect(result).toEqual('this-is-spinal-tap');
  });

  it('', () => {
    const str = 'thisIsSpinalTap';
    const result = stringToSpinalCase(str);

    expect(result).toEqual('this-is-spinal-tap');
  });

  it('', () => {
    const str = 'The_Andy_Griffith_Show';
    const result = stringToSpinalCase(str);

    expect(result).toEqual('the-andy-griffith-show');
  });

  it('', () => {
    const str = 'Teletubbies say Eh-oh';
    const result = stringToSpinalCase(str);

    expect(result).toEqual('teletubbies-say-eh-oh');
  });

  it('', () => {
    const str = 'AllThe-small Things';
    const result = stringToSpinalCase(str);

    expect(result).toEqual('all-the-small-things');
  });
});
