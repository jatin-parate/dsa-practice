function isEqual(pMap: Map<string, number>, map: Map<string, number>): boolean {
  for (let [key, freq] of pMap.entries()) {
    if (!map.has(key) || map.get(key) !== freq) {
      return false;
    }
  }

  return true;
}

export function findAnagrams(s: string, p: string): number[] {
  const pMap = new Map<string, number>();
  for (let i = 0; i < p.length; i++) {
    if (!pMap.has(p[i])) {
      pMap.set(p[i], 1);
    } else {
      pMap.set(p[i], 1 + pMap.get(p[i])!);
    }
  }

  let map = new Map<string, number>();
  for (let i = 0; i <= p.length - 1; i++) {
    if (pMap.has(s[i])) {
      map.set(s[i], 1 + (map.get(s[i]) ?? 0));
    }
  }

  let res: number[] = [];

  if (isEqual(pMap, map)) {
    res.push(0);
  }

  for (let i = 1; i <= s.length - p.length; i++) {
    const lastFreq = map.get(s[i - 1]) ?? 0;
    if (lastFreq < 2) {
      map.delete(s[i - 1]);
    } else {
      map.set(s[i - 1], lastFreq - 1);
    }

    if (pMap.has(s[i + p.length - 1])) {
      let char = s[i + p.length - 1];
      map.set(char, 1 + (map.get(char) ?? 0));
    }

    if (isEqual(pMap, map)) {
      res.push(i);
    }
  }

  return res;
}

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("baa", "aa"));
