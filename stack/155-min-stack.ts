export class MinStack {
  private readonly stack: number[] = [];
  private readonly minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    this.minStack.push(
      Math.min(val, this.minStack.length > 0 ? this.minStack.at(-1)! : val)
    );
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack.at(-1)!;
  }

  getMin(): number {
    return this.minStack.at(-1)!;
  }
}
