import { ListNode } from "./utils";

export class MyCircularQueue {
  private totalNodes = 0;
  private front?: ListNode | null;
  private rear?: ListNode | null;

  constructor(private k: number) {}

  enQueue(value: number): boolean {
    if (this.totalNodes === this.k) {
      return false;
    }

    const newNode = new ListNode(value);

    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear!.next = newNode;
      this.rear = this.rear!.next;
    }

    this.totalNodes += 1;
    return true;
  }

  deQueue(): boolean {
    if (!this.front) {
      return false;
    }

    let first = this.front;

    if (this.front === this.rear) {
      this.front = this.rear = undefined;
    } else {
      this.front = this.front.next;
    }

    first.next = null;
    this.totalNodes -= 1;
    return true;
  }

  Front(): number {
    if (this.front) {
      return this.front.val;
    } else {
      return -1;
    }
  }

  Rear(): number {
    if (this.rear) {
      return this.rear.val;
    } else {
      return -1;
    }
  }

  isEmpty(): boolean {
    return Boolean(this.front);
  }

  isFull(): boolean {
    return this.k === this.totalNodes;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
