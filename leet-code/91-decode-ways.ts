function numDecodings(s: string, i = 0): number {
  const dp = new Array(s.length).fill(0);
  dp[s.length - 1] = s.charAt(s.length - 1) === "0" ? 0 : 1;

  for (let i = s.length - 2; i >= 0; i--) {
    if (s.charAt(i) === "0") {
      dp[i] = 0;
    } else if (s.charAt(i + 1) === "0") {
      if (Number.parseInt(s.charAt(i)) > 2) {
        return 0;
      }
      dp[i] = i + 2 >= s.length ? 1 : dp[i + 2];
    } else if (s.charAt(i) !== "1" && s.charAt(i) !== "2") {
      dp[i] = dp[i + 1];
    } else if (s.charAt(i) === "1") {
      dp[i] = dp[i + 1] + (i + 2 >= s.length ? 1 : dp[i + 2]);
    } else {
      if (Number.parseInt(s.charAt(i + 1)) > 6) {
        dp[i] = i + 2 >= s.length ? 1 : dp[i + 2];
      } else {
        dp[i] = dp[i + 1] + (i + 2 >= s.length ? 1 : dp[i + 2]);
      }
    }
  }

  return dp[0];
}

console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
console.log(numDecodings("27"));
