export function checkInclusion(s1: string, s2: string): boolean {
  const s1Map = new Map<string, number>();
  for (let char of s1) {
    s1Map.set(char, 1 + (s1Map.get(char) ?? 0));
  }

  const s2Map = new Map<string, number>();
  for (let i = 0; i < s1.length; i++) {
    const char = s2[i];
    if (s1Map.has(char)) {
      s2Map.set(char, (s2Map.get(char) ?? 0) + 1);
    }
  }

  const checkCondition = (): boolean => {
    for (let key of s1Map.keys()) {
      if (!s2Map.has(key) || s2Map.get(key)! !== s1Map.get(key)!) {
        return false;
      }
    }

    return true;
  };

  if (checkCondition()) {
    return true;
  }

  for (let i = 1; i <= s2.length - s1.length; i++) {
    s2Map.set(s2[i - 1], s2Map.get(s2[i - 1])! - 1);
    const nextChar = s2[i + s1.length - 1];
    if (s1Map.has(nextChar)) {
      s2Map.set(nextChar, 1 + (s2Map.get(nextChar) ?? 0));
    }

    if (checkCondition()) {
      return true;
    }
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
