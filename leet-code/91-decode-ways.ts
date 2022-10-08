function numDecodings(s: string, i = 0): number {
  // Index overflowed
  if (i >= s.length) {
    return 1;
  }

  if (s[i] === "0") {
    return 0;
  }

  // Current index can be last index
  if (i === s.length - 1) {
    return 1; // Because current one is not zero
  }

  // There is one more element after current one
  if (s.charAt(i + 1) === "0") {
    // Next one is zero and current one is not zero
    // if these two are last group
    if (i + 2 >= s.length) {
      return 1;
    }
    // there are more
    return numDecodings(s, i + 2);
  }
  // next element is not zero
  if (s.charAt(i) === "1") {
    // there can be next element which can be grouped
    return numDecodings(s, i + 1) + numDecodings(s, i + 2);
  }
  if (s.charAt(i) === "2") {
    if (Number.parseInt(s.charAt(i + 1)) >= 7) {
      return numDecodings(s, i + 2);
    }

    return numDecodings(s, i + 1) + numDecodings(s, i + 2);
  }

  // only one group can be formed
  return numDecodings(s, i + 1);
}

console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
console.log(numDecodings("27"));
