import assert from "assert";

function buildString(str: string): Array<string> {
  const output = [];

  for (let char of str) {
    if (char === "#") {
      if (output.length > 0) output.pop();
    } else {
      output.push(char);
    }
  }

  return output;
}

const backspaceCompare = (str1: string, str2: string): boolean => {
  const s1 = buildString(str1);
  const s2 = buildString(str2);

  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }

  return true;
};

assert.equal(backspaceCompare("xywrrmp", "xywrrmu#p"), true);
assert.equal(backspaceCompare("ab#c", "ad#c"), true);
assert.equal(backspaceCompare("ab##", "c#d#"), true);
assert.equal(backspaceCompare("a#c", "b"), false);
