function buddyStrings(s: string, goal: string): boolean {
  const string = s.split("");
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    const map = new Map<string, number>();
    string.forEach((char) => {
      if (map.has(char)) {
        map.set(char, map.get(char)! + 1);
      } else {
        map.set(char, 1);
      }
    });

    return [...map.keys()].some((key) => map.get(key)! > 1);
  } else {
    let first = -1;
    let second = -1;
    for (let i = 0; i < s.length; ++i) {
      if (s[i] !== goal[i]) {
        if (first === -1) {
          first = i;
        } else if (second === -1) {
          second = i;
        } else {
          return false;
        }
      }
    }

    return (
      second !== -1 && s[first] === goal[second] && s[second] === goal[first]
    );
  }
}

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
