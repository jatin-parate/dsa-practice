import assert from "assert";

export class MyStack {
  private queue: number[] = [];
  private topMostElement?: number;

  push(x: number): void {
    this.topMostElement = x;
    this.queue.push(x);
  }

  pop(): number {
    const queue: typeof this.queue = [];
    let length = this.queue.length;
    for (let i = 0; i < length - 1; i++) {
      const ele = this.queue.shift()!;
      queue.push(ele);
      if (i === length - 2) {
        this.topMostElement = ele;
      }
    }

    const res = this.queue.shift()!;
    this.queue = queue;
    return res;
  }

  top(): number {
    return this.topMostElement!;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

{
  var obj = new MyStack();
  obj.push(1);
  obj.push(2);
  assert.equal(obj.top(), 2);
  assert.equal(obj.pop(), 2);
  assert.equal(obj.empty(), false);
}

{
  var obj = new MyStack();
  obj.push(1);
  obj.push(2);
  assert.equal(obj.pop(), 2);
  assert.equal(obj.top(), 1);
}
