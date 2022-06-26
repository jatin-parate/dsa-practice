import assert from "assert";

function minRemoveToMakeValid(s: string): string {
  let output = s.split("");
  const stack: number[] = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        output[i] = "";
      }
    }
  }

  stack.forEach((entry) => {
    output[entry] = "";
  });

  return output.join("");
}

assert.equal(minRemoveToMakeValid("(a(b(c)d)"), "a(b(c)d)");
assert.equal(minRemoveToMakeValid("a)b(c)d"), "ab(c)d");
assert.equal(minRemoveToMakeValid("))(("), "");
assert.equal(minRemoveToMakeValid("lee(t(c)o)de)"), "lee(t(c)o)de");
