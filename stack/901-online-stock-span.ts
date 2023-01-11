import assert from "assert";

export class StockSpanner {
  private readonly stack: [number, number][] = [];

  next(price: number): number {
    if (this.stack.length === 0) {
      this.stack.push([price, 1]);
      return 1;
    }

    let count = 1;
    while (this.stack.length > 0 && this.stack.at(-1)![0] <= price) {
      const top = this.stack.pop()!;
      count += top[1];
    }

    this.stack.push([price, count]);
    return count;
  }
}

var obj = new StockSpanner();
assert.equal(obj.next(100), 1);
assert.equal(obj.next(80), 1);
assert.equal(obj.next(60), 1);
assert.equal(obj.next(70), 2);
assert.equal(obj.next(60), 1);
assert.equal(obj.next(75), 4);
assert.equal(obj.next(85), 6);
