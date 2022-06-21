import assert from "assert";

const backspaceCompare = (str1: string, str2: string): boolean => {
  let p1 = str1.length - 1;
  let p2 = str2.length - 1;

  while (p1 > -1 || p2 > -1) {
    let skipCount = 0;
    if (str1[p1] === "#") {
      skipCount = 2;
      while (skipCount > 0) {
        p1 -= 1;
        skipCount -= 1;
        if (str1[p1] === "#") {
          skipCount += 2;
        }
      }
      skipCount = 0;
    }
    if (str2[p2] === "#") {
      skipCount = 2;
      while (skipCount > 0) {
        p2 -= 1;
        skipCount -= 1;
        if (str2[p2] === "#") {
          skipCount += 2;
        }
      }
    }
    if (str1[p1] !== str2[p2]) {
      return false;
    }
    p1 -= 1;
    p2 -= 1;
  }

  return p1 < 0 && p2 < 0;
};

assert.equal(backspaceCompare("nzp#o#g", "b#nzp#o#g"), true);
assert.equal(backspaceCompare("xywrrmp", "xywrrmu#p"), true);
assert.equal(backspaceCompare("ab#c", "ad#c"), true);
assert.equal(backspaceCompare("ab##", "c#d#"), true);
assert.equal(backspaceCompare("a#c", "b"), false);
