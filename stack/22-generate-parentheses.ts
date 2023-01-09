export function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const res: string[] = [];

  const backtrack = (openN: number, closedN: number): void => {
    if (openN === closedN && closedN === n) {
      res.push(stack.join(""));
      return;
    }
    if (openN < n) {
      stack.push("(");
      backtrack(openN + 1, closedN);
      stack.pop();
    }
    if (closedN < openN) {
      stack.push(")");
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);

  return res;
}

console.log(generateParenthesis(3));
