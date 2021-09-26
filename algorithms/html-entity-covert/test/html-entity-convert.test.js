const convertHTML = require('../html-entity-convert');

describe('Convert string &, <, >, " (double quote), and \' (apostrophe) characters to HTML entities', () => {
  describe('', () => {
    it('', () => {
      const result = convertHTML('Dolce & Gabbana');

      expect(result).toEqual('Dolce &amp; Gabbana');
    });

    it('', () => {
      const result = convertHTML('Hamburgers < Pizza < Tacos');

      expect(result).toEqual('Hamburgers &lt; Pizza &lt; Tacos');
    });

    it('', () => {
      const result = convertHTML('Stuff in "quotation marks"');

      expect(result).toEqual('Stuff in &quot;quotation marks&quot;');
    });

    it('', () => {
      const result = convertHTML("Schindler's List");

      expect(result).toEqual('Schindler&apos;s List');
    });

    it('', () => {
      const result = convertHTML('<>');

      expect(result).toEqual('&lt;&gt;');
    });

    it('', () => {
      const result = convertHTML('abc');

      expect(result).toEqual('abc');
    });
  });
});
