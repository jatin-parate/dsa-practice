class Stack {
  protected arr: number[] = [];

  constructor(stack?: Stack) {
    if (stack) {
      this.arr = [...stack.arr];
    }
  }

  print() {
    console.log(this.arr);
  }

  push(ele: number) {
    this.arr.push(ele);
  }

  pop(): number {
    if (!this.arr.length) {
      throw new Error("Stack is empty");
    }

    return this.arr.pop()!;
  }

  isEmpty() {
    return !this.arr.length;
  }

  peek() {
    return this.arr.length ? this.arr.at(-1) : undefined;
  }
}

class Queue {
  private stack = new Stack();

  // O(1)
  enqueue(ele: number) {
    this.stack.push(ele);
  }

  // O(n)
  dequeue(): number {
    if (this.stack.isEmpty()) {
      throw Error("Queue is empty");
    }

    const stack = new Stack();
    while (!this.stack.isEmpty()) {
      stack.push(this.stack.pop());
    }
    const deletedElement = stack.pop();
    while (!stack.isEmpty()) {
      this.stack.push(stack.pop());
    }

    return deletedElement;
  }

  // O(n)
  peek(): number | undefined {
    if (this.stack.isEmpty()) {
      return undefined;
    }
    const stack = new Stack(this.stack);
    let last = stack.pop();
    while (!stack.isEmpty()) {
      last = stack.pop();
    }

    return last;
  }

  // O(1)
  empty(): void {
    this.stack = new Stack();
  }

  print() {
    this.stack.print();
  }
}

const queue = new Queue();
for (let i = 0; i < 10; i += 1) {
  queue.enqueue(i + 1);
}

queue.print();

queue.dequeue();

queue.print();

queue.enqueue(100);

queue.print();

queue.empty();
queue.print();
