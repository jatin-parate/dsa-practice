import assert from "assert";

export function removeDuplicates(s: string, k: number): string {
  const stack: { val: string; count: number }[] = [];

  for (let char of s) {
    const top = stack.at(-1);
    if (top?.val === char) {
      top!.count += 1;

      if (top!.count >= k) {
        top!.count -= k;
      }

      if (top!.count === 0) {
        stack.pop();
      }
    } else {
      stack.push({ count: 1, val: char });
    }
  }

  return stack.map((obj) => obj.val.repeat(obj.count)).join("");
}

assert.equal(removeDuplicates("abcd", 2), "abcd");
assert.equal(removeDuplicates("deeedbbcccbdaa", 3), "aa");
assert.equal(removeDuplicates("pbbcggttciiippooaais", 2), "ps");
