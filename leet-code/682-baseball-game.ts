import assert from "assert";

function calPoints(ops: string[]): number {
  const stack: number[] = [];

  for (let op of ops) {
    switch (op) {
      case "+":
        stack.push(stack.at(-1)! + stack.at(-2)!);
        break;
      case "D":
        stack.push(stack.at(-1)! * 2);
        break;
      case "C":
        stack.pop();
        break;
      default:
        stack.push(parseInt(op, 10));
        break;
    }
  }

  return stack.reduce((prev, curr) => prev + curr, 0);
}

assert.equal(calPoints(["5", "2", "C", "D", "+"]), 30);
assert.equal(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]), 27);
assert.equal(calPoints(["1"]), 1);
