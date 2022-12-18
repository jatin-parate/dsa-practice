function characterReplacement(s: string, k: number): number {
  let start = 0,
    end = 0,
    l = 1,
    map = new Map<string, number>();

  map.set(s[0], 1);

  while (end < s.length - 1) {
    end++;
    const nextChar = s[end];
    map.set(nextChar, 1 + (map.get(nextChar) ?? 0));
    let [[, largestCount], ...entries] = map.entries();
    for (let entry of entries) {
      if (entry[1] > largestCount) {
        largestCount = entry[1];
      }
    }

    if (end - start + 1 - largestCount > k) {
      while (start < end) {
        // increment start
        const currFreq = map.get(s[start])!;
        if (currFreq < 2) {
          map.delete(s[start]);
        } else {
          map.set(s[start], currFreq - 1);
        }
        start++;

        // re-calculate largest count as start is changed
        let [[, largestCount], ...entries] = map.entries();
        for (let entry of entries) {
          if (entry[1] > largestCount) {
            largestCount = entry[1];
          }
        }

        if (end - start + 1 - largestCount <= k) {
          break;
        }
      }
    }

    if (end - start + 1 - largestCount <= k) {
      // current substring is valid
      l = Math.max(l, end - start + 1);
    }
  }

  return l;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("AAAB", 0));
