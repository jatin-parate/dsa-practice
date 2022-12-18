export class Solution {
  /**
   * @param s: A string
   * @param k: An integer
   * @return: An integer
   */
  lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    if (!s || k < 1) {
      return 0;
    }

    const isConditionSatisfied = () => map.size <= k;

    const map = new Map<string, number>();
    let start = 0;
    let end = 0;
    let maxLength = 1;
    map.set(s[start], 1);

    while (start <= end && end < s.length - 1) {
      end++;
      const nextChar = s[end];
      const nextCharNewFreq = 1 + (map.get(nextChar) ?? 0);
      map.set(nextChar, nextCharNewFreq);

      while (!isConditionSatisfied() && start < end) {
        const firstChar = s[start];
        const firstCharFreq = map.get(firstChar)!;
        if (firstCharFreq === 1) {
          map.delete(firstChar);
        } else {
          map.set(firstChar, firstCharFreq - 1);
        }
        start += 1;
      }

      if (end - start + 1 > maxLength) {
        // console.log(s.slice(start, end + 1), map);

        maxLength = Math.max(maxLength, end - start + 1);
      }
    }

    return maxLength;
  }
}

const sol = new Solution();
console.log(sol.lengthOfLongestSubstringKDistinct("eceba", 3));
console.log(sol.lengthOfLongestSubstringKDistinct("WORLD", 4));
