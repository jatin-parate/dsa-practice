const brackets: Record<string, string> = { "[": "]", "(": ")", "{": "}" };

const isOpen = (char: string) => {
  return Boolean(brackets[char]);
};

const isCloseMatches = (ending: string, opening?: string) => {
  return (
    (ending === ")" && opening === "(") ||
    (ending === "}" && opening === "{") ||
    (ending === "]" && opening === "[")
  );
};

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (isOpen(s[i])) {
      stack.push(s[i]);
      continue;
    }

    const openingBracket = stack.pop();
    if (!openingBracket || brackets[openingBracket] !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
