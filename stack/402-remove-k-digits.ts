import assert from "node:assert";

export function removeKdigits(nums: string, k: number): string {
  const stack: string[] = [];

  if (k >= nums.length) {
    return "0";
  }

  for (let num of nums) {
    while (stack.length > 0 && stack.at(-1)! > num && k > 0) {
      stack.pop();
      k--;
    }
    if (num === "0" && stack.length === 0) {
      continue;
    }

    stack.push(num);
    continue;
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  return stack.join("") || "0";
}

assert.equal(removeKdigits("1432219", 3), "1219");
assert.equal(removeKdigits("10200", 1), "200");
assert.equal(removeKdigits("10", 2), "0");
assert.equal(removeKdigits("9", 1), "0");
assert.equal(removeKdigits("112", 1), "11");
