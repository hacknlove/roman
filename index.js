/* eslint-disable no-plusplus */
function validateArabic(arabic) {
  if (arabic < 1 || arabic > 3999) {
    throw new Error('invalid range');
  }
}

function validateRoman(roman) {
  if (!roman) {
    throw new Error('value required');
  }
  if (!roman.match(/^[MDCLXVI]+$/)) {
    throw new Error('invalid value');
  }

  if (roman.match(/I{4,}|V{4,}|X{4,}|L{4,}|C{4,}|D{4,}|M{4,}/)) {
    throw new Error('invalid value');
  }
}

const pieces = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

function romanToArabic(roman) {

}

function arabicToRoman(arabic, current = '') {
  let i = 0;
  while (arabic < pieces[i][0]) {
    i++;
  }

  const times = Math.floor(arabic / pieces[i][0]);

  current += pieces[i][1].repeat(times);

  if (arabic % pieces[i][0] === 0) {
    return current;
  }

  return arabicToRoman(arabic - times * pieces[i][0], current);
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
  };
  this.toString = function toString() {
    if (this.roman) {
      return this.roman;
    }
    this.roman = arabicToRoman(this.arabic);
    return this.roman;
  };
}

module.exports = RomanNumeral;
