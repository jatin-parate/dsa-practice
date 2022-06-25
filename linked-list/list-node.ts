export class ListNode {
  constructor(public value: number, public next: ListNode | null = null) {}
}

export class DoublyListNode {
  constructor(
    public value: number,
    public next: DoublyListNode | null = null,
    public prev: DoublyListNode | null = null
  ) {}
}
