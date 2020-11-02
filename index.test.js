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

  it('CD1X string should throw invalid value', () => {
    expect(() => (new RomanNumeral('CD1X'))).toThrow('invalid value');
  });

  it('IIII string should throw invalid value', () => {
    expect(() => (new RomanNumeral('IIII'))).toThrow('invalid value');
  });
  it('MMMMCMXCIX string should throw invalid value', () => {
    expect(() => (new RomanNumeral('MMMMCMXCIX'))).toThrow('invalid value');
  });
  it('MMMMDMXCIX string should throw invalid value', () => {
    expect(() => (new RomanNumeral('MMMMDMXCIX'))).toThrow('invalid value');
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
    expect(RomanNumeral(3).toString()).toEqual('III');
  });
  it('4', () => {
    expect(RomanNumeral(4).toString()).toEqual('IV');
  });
  it('5', () => {
    expect(RomanNumeral(5).toString()).toEqual('V');
  });
  it('1968', () => {
    expect(RomanNumeral(1968).toString()).toEqual('MCMLXVIII');
  });
  it('2999', () => {
    expect(RomanNumeral(2999).toString()).toEqual('MMCMXCIX');
  });
  it('3000', () => {
    expect(RomanNumeral(3000).toString()).toEqual('MMM');
  });
});

describe('Roman to Arabic', () => {
  it('I', () => {
    expect(RomanNumeral('I').toInt()).toEqual(1);
  });
  it('III', () => {
    expect(RomanNumeral('III').toInt()).toEqual(3);
  });
  it('IV', () => {
    expect(RomanNumeral('IV').toInt()).toEqual(4);
  });
  it('V', () => {
    expect(RomanNumeral('V').toInt()).toEqual(5);
  });
  it('CDXXIX', () => {
    expect(RomanNumeral('CDXXIX').toInt()).toEqual(429);
  });

  it('MCDLXXXII', () => {
    expect(RomanNumeral('MCDLXXXII').toInt()).toEqual(1482);
  });
});
