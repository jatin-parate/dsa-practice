function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let minLength = Math.min(...strs.map((str) => str.length));
  let prefix = "";

  for (let i = 0; i < minLength; i++) {
    let currChar = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== currChar) {
        return prefix;
      }
    }

    prefix += currChar;
  }

  return prefix;
}

console.log(longestCommonPrefix([""]));

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
