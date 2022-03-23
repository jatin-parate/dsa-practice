import assert from 'assert';

const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 *
 * @param {string} s
 * @returns {number}
 */
const romanToInt = (s) => {
  let number = 0;
  const numbers = [];

  for (let i = 0; i < s.length; i += 1) {
    numbers.push(romanMap[s.charAt(i)]);
  }

  for (let i = 0; i < numbers.length - 1; i += 1) {
    if (numbers[i] < numbers[i + 1]) {
      number -= numbers[i];
    } else {
      number += numbers[i];
    }
  }

  number += numbers[numbers.length - 1];

  return number;
};

assert.strictEqual(romanToInt('III'), 3);
assert.strictEqual(romanToInt('VI'), 6);
assert.strictEqual(romanToInt('IV'), 4);
assert.strictEqual(romanToInt('LVIII'), 58);
assert.strictEqual(romanToInt('MCMXCIV'), 1994);
