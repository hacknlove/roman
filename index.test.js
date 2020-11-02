const RomanNumeral = require('./index');

describe('Errors', () => {
  it('null should throw value required', () => {
    expect(() => (new RomanNumeral(null))).toThrow('value required');
  });

  it('undefined should throw value required', () => {
    expect(() => (new RomanNumeral())).toThrow('value required');
  });

  it('empty string should throw value required', () => {
    expect(() => (new RomanNumeral(''))).toThrow('value required');
  });

  it('arabic number string should throw invalid value', () => {
    expect(() => (new RomanNumeral('1473'))).toThrow('invalid value');
  });

  it('error string should throw invalid value', () => {
    expect(() => (new RomanNumeral('error'))).toThrow('invalid value');
  });

  it('0 should throw invalid range', () => {
    expect(() => (new RomanNumeral(0))).toThrow('invalid range');
  });

  it('10000 should throw invalid range', () => {
    expect(() => (new RomanNumeral(10000))).toThrow('invalid range');
  });
});

describe('Arabic to Roman', () => {
  it('1', () => {
    expect(RomanNumeral(1).toString()).toEqual('I');
  });
  it('3', () => {
    expect(RomanNumeral(1).toString()).toEqual('III');
  });
  it('4', () => {
    expect(RomanNumeral(1).toString()).toEqual('IV');
  });
  it('5', () => {
    expect(RomanNumeral(1).toString()).toEqual('V');
  });
  it('1968', () => {
    expect(RomanNumeral(1).toString()).toEqual('MCMLXIIX');
  });
  it('2999', () => {
    expect(RomanNumeral(1).toString()).toEqual('MMCMXCIX');
  });
  it('3000', () => {
    expect(RomanNumeral(1).toString()).toEqual('MMM');
  });
})

describe('Roman to Arabic', () => {
  it('I', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('III', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('IIII', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('IV', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('V', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('CDXXIX', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('CD1X', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('MCDLXXXII', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('I', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('MMMMCMXCIX', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('MMMMI', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('I', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });


})
