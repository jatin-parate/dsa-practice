export class FreqStack {
  private readonly stack: { freq: number; val: number }[] = [];
  private readonly map = new Map<number, number>();

  push(val: number): void {
    const currFreq = 1 + (this.map.get(val) ?? 0);
    const tmpStack: typeof this.stack = [];
    while (this.stack.length > 0 && this.stack.at(-1)!.freq > currFreq) {
      tmpStack.push(this.stack.pop()!);
    }

    this.stack.push({ freq: currFreq, val });
    while (tmpStack.length > 0) {
      this.stack.push(tmpStack.pop()!);
    }
    this.map.set(val, currFreq);
  }

  pop(): number {
    const top = this.stack.pop()!;
    const currFreq = this.map.get(top.val)!
    if (currFreq === 1) {
      this.map.delete(top.val)
    } else {
      this.map.set(top.val, currFreq - 1)
    }

    return top.val
  }
}
