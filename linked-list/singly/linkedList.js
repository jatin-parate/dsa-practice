class Node {
  next = null;

  constructor(val) {
    this.val = val;
  }

  setNext(next) {
    this.next = next;
  }

  print() {
    let p = this;
    let str = '';
    while(p != null) {
      str += p.val + ' ';
      p = p.next;
    }

    return str;
  }

  static generate(n) {
    const head = new Node(1);
    let p = head;
    for (let i = 2; i <= n; i+=1) {
      const node = new Node(i);
      p.next = node;
      p = p.next;
    }

    return head;
  }
}

module.exports = Node;
