function validateArabic(number) {
  if (number < 1 || number > 3999) {
    throw new Error('invalid range');
  }
}

function validateRoman(string) {
  if (!string) {
    throw new Error('value required');
  }
  if (!string.match(/^[MDCLXVI]+$/)) {
    throw new Error('invalid value');
  }
}

function romanToArabic(roman) {

}

function arabicToRoman(arabic) {

}

function RomanNumeral(input) {
  if (!(this instanceof RomanNumeral)) {
    return new RomanNumeral(input);
  }

  switch (typeof input) {
    case 'number':
      validateArabic(input);
      this.arabic = input;
      break;
    case 'string':
      validateRoman(input);
      this.roman = input;
      break;
    default:
      if (!input) {
        throw new Error('value required');
      }
      throw new Error('invalid value');
  }

  this.toInt = function toInt() {
    if (this.arabic) {
      return this.arabic;
    }
    this.arabic = romanToArabic(this.roman);
    return this.arabic;
  }
  this.toString = function toString() {
    if (this.roman) {
      return this.roman;
    }
    this.roman = romanToArabic(this.arabic);
    return this.roman;
  }
}

module.exports = RomanNumeral;
