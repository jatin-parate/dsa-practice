import assert from "assert";

function removeOuterParentheses(s: string): string {
  const stack: string[] = [];

  if (s.length < 2) {
    return "";
  }

  let isParenthesesOpen = false;
  let currOpen = 0;
  for (let char of s) {
    if (char === '(') {
      currOpen += 1;
      if (!isParenthesesOpen) {
        isParenthesesOpen = true;
      } else {
        stack.push(char);
      }
    } else {
      currOpen -= 1;
      if (currOpen === 0) {
        isParenthesesOpen = false;
      } else {
        stack.push(char)
      }
    }
  }

  return stack.join("");
}

console.log(removeOuterParentheses("(()())(())"));
