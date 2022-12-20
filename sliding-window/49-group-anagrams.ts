export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let str of strs) {
    const arr = new Array(26).fill(0)

    for (let i = 0; i < str.length; i++) {
      arr[str.charCodeAt(i) - 97]++;
    }
    

    const key = arr.join(',');
    if (map.has(key)) {
      map.get(key)!.push(str)
    } else {
      map.set(key, [str])
    }
  }

  return [...map.values()];
}
console.log(groupAnagrams(["ddddddddddg","dgggggggggg"]));


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["", "b"]));
console.log(groupAnagrams(["tea", "and", "ace", "ad", "eat", "dans"]));
