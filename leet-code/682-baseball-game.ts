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

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1"]));
