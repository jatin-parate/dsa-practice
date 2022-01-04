const MultiLevelNode = require("./multiLevelNode");

/**
 * @complexity
 * - Time: O(n)
 * - Space: O(n)
 * @param {MultiLevelNode} head 
 * @returns {MultiLevelNode | null}
 */
const flattenAndGetEnd = (head) => {
  let p = head;
  do {
    if (p.hasDown()) {
      let end = flattenAndGetEnd(p.down);
      end.next = p.next;
      p.next = p.down;
      p.down = null;
      p = end;
    }

    if (p.hasNext()) {
      p = p.next;
    }
  } while (p.hasNext() || p.hasDown());

  return p;
};

const list = MultiLevelNode.generateList();

console.log(list.print());
console.time('t');
flattenAndGetEnd(list);
console.timeEnd('t');
console.log(list.print());

/**
  #pseudo code:
  flattenAndGetEnd(head) {
    p = head
    do {
      if (p.hasDown()) {
        end = flattenAndGetEnd(p.down)
        end.next = p.next
        p.next = p.down
        p.down = null
        p = end
      }
      p = p.next
    } while(p.hasNext() || p.hasDown())

    return p;
  }
*/
