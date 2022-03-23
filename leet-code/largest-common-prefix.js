import assert from 'assert';

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const shortestLength = strs.reduce(
    (smallest, s) => Math.min(smallest, s.length),
    201,
  );
  if (strs.length === 0 || shortestLength === 0) {
    return '';
  }
  let strSoFar = '';
  for (let i = 0; i < shortestLength; i += 1) {
    const firstWordCurrentChar = strs[0][i];
    const isMatch = strs.reduce(
      (isMatchSoFar, s) => isMatchSoFar && s[i] === firstWordCurrentChar,
      true,
    );
    if (!isMatch) {
      break;
    }
    strSoFar += firstWordCurrentChar;
  }
  return strSoFar;
};

assert.deepEqual(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
assert.deepEqual(longestCommonPrefix(['dog', 'racecar', 'car']), '');
