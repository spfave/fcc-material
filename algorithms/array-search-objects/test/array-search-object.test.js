const arraySearchObjects = require('../array-search-objects');

describe('Find objects in collection with key-value pairs matching source object', () => {
  it('', () => {
    const collection = [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ];
    const source = { last: 'Capulet' };

    const result = arraySearchObjects(collection, source);

    expect(result).toEqual([{ first: 'Tybalt', last: 'Capulet' }]);
  });

  it('', () => {
    const collection = [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }];
    const source = { apple: 1 };

    const result = arraySearchObjects(collection, source);

    expect(result).toEqual([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
  });

  it('', () => {
    const collection = [
      { apple: 1, bat: 2 },
      { bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ];
    const source = { apple: 1, bat: 2 };

    const result = arraySearchObjects(collection, source);

    expect(result).toEqual([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ]);
  });

  it('', () => {
    const collection = [
      { apple: 1, bat: 2 },
      { bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ];
    const source = { apple: 1, cookie: 2 };

    const result = arraySearchObjects(collection, source);

    expect(result).toEqual([{ apple: 1, bat: 2, cookie: 2 }]);
  });

  it('', () => {
    const collection = [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ];
    const source = { apple: 1, bat: 2 };

    const result = arraySearchObjects(collection, source);

    expect(result).toEqual([
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ]);
  });

  it('', () => {
    const collection = [{ a: 1, b: 2, c: 3 }];
    const source = { a: 1, b: 9999, c: 3 };

    const result = arraySearchObjects(collection, source);

    expect(result).toEqual([]);
  });
});
