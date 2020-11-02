const RomanNumeral = require('./index');

console.log(typeof RomanNumeral);

describe('RomanNumeralsTest', () => {
  it('null should throw value required', () => {
    expect(() => (new RomanNumeral(null))).toThrow('value required');
  });
});
