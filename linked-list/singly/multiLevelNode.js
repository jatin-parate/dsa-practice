class MultiLevelNode {
  /** @type {MultiLevelNode} */
  next = null;
  /** @type {MultiLevelNode} */
  down = null;

  constructor(val) {
    this.val = val;
  }

  hasNext() {
    return this.next != null;
  }

  hasDown() {
    return this.down != null;
  }

  appendDown(val) {
    const node = new MultiLevelNode(val);
    this.down = node;
    return node;
  }

  appendNext(val) {
    const node = new MultiLevelNode(val);
    this.next = node;
    return node;
  }

  print() {
    let str = "" + this.val;
    if (this.down) {
      str += "(" + this.down.print() + ")";
    }
    if (this.next) {
      str += " " + this.next.print();
    }
    return str;
  }

  static generateList = () => {
    const head = new MultiLevelNode(1);

    head.appendDown(2).appendNext(3).appendNext(4).appendNext(5);

    const last = head.appendNext(6).appendNext(7);
    last.appendDown(8);

    return head;
  };
}

module.exports = MultiLevelNode;
