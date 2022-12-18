function characterReplacement(s: string, k: number): number {
  let l = 0;
  const count: Record<string, number> = {};
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    count[s[r]] = 1 + (count[s[r]] || 0);

    while (r - l + 1 - Math.max(...Object.values(count)) > k) {
      count[s[l]] -= 1;
      l += 1;
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("AAAB", 0));
