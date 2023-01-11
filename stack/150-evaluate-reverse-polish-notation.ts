import assert from "assert";

function isOperator(token: string) {
  return token === "+" || token === "-" || token === "*" || token === "/";
}

export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let token of tokens) {
    if (!isOperator(token)) {
      stack.push(Number.parseInt(token, 10));
    } else {
      const second = stack.pop()!;
      const first = stack.pop()!;

      switch (token) {
        case "+":
          stack.push(first + second);
          break;
        case "-":
          stack.push(first - second);
          break;
        case "*":
          stack.push(first * second);
          break;
        case "/":
          const res = first / second;
          stack.push(res < 0 ? Math.ceil(res) : Math.floor(res));
          break;
        default:
          throw Error("Invalid operator");
      }
    }
  }

  return stack.pop()!;
}

assert.equal(evalRPN(["2", "1", "+", "3", "*"]), 9);
assert.equal(evalRPN(["4", "13", "5", "/", "+"]), 6);
assert.equal(
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
  22
);
