import assert from "assert";

const isPalindrome = (str: string, l: number, r: number): boolean => {
  while (l <= r) {
    if (str[l] === str[r]) {
      l += 1;
      r -= 1;
    } else {
      return false;
    }
  }
  return true;
};

const validPalindrome = (str: string): boolean => {
  let l = 0;
  let r = str.length - 1;

  while (l <= r) {
    if (str[l] !== str[r]) {
      return isPalindrome(str, l, r - 1) || isPalindrome(str, l + 1, r);
    } else {
      l += 1;
      r -= 1;
    }
  }

  return true;
};

assert.equal(validPalindrome("raceacar"), true);
assert.equal(validPalindrome("abcdefdba"), false);
assert.equal(validPalindrome(""), true);
assert.equal(validPalindrome("a"), true);
