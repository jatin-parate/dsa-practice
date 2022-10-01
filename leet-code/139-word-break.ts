function wordBreak(
  s: string,
  wordDict: string[],
  dp: Record<string, boolean> = {}
): boolean {
  if (dp[s] !== undefined) {
    return dp[s];
  }
  if (!s) {
    return true;
  }

  for (let segment of wordDict) {
    if (s.startsWith(segment)) {
      const remainingString = s.slice(segment.length);
      if (wordBreak(remainingString, wordDict, dp)) {
        dp[s] = true;

        return true;
      }
    }
  }

  dp[s] = false;
  return false;
}

// console.log(wordBreak("leetcode", ["leet", "code"]));
// console.log(wordBreak("applepenapple", ["apple", "pen"]));
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.time("start");
console.log(
  wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa",
    ]
  )
);
console.timeEnd("start");
