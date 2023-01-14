class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function isPalindrome(head: ListNode | null): boolean {
  const stack: ListNode[] = [];

  {
    let pointer = head;
    while (pointer) {
      stack.push(pointer);
      pointer = pointer.next;
    }
  }

  let pointer = head;

  while (pointer && stack.length > 0) {
    if (pointer === stack.at(-1)!) {
      return true;
    }

    if (pointer.val !== stack.at(-1)!.val) {
      return false;
    }

    stack.pop();
    pointer = pointer?.next;
  }

  return true;
}
