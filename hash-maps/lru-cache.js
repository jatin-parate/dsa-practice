import { DoublyLinkedList } from '../linked-list/doubly/doublyLinkedList';

class LruCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this.accessStack = new DoublyLinkedList();
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this.accessStack.moveNodeToEnd(node);
      return node.val.val;
    }

    return -1;
  }

  set(key, val) {
    if (this.capacity === 0) {
      const keyToDelete = this.accessStack.deleteHead();
      this.cache.delete(keyToDelete.val.key);
    }
    const node = this.accessStack.insertEnd({ key, val });

    this.cache.set(key, node);
    this.capacity -= 1;
  }
}

const ourCache = new LruCache(5);

ourCache.set(1, 1);
ourCache.set(2, 2);
ourCache.set(3, 3);
ourCache.set(4, 4);

console.log(ourCache.get(1)); // returns 1
console.log(ourCache.get(2)); // returns 2
console.log(ourCache.get(9)); // returns -1 because 9 is not present in the cache

ourCache.set(5, 5);
ourCache.set(6, 6);

// eslint-disable-next-line max-len
console.log(ourCache.get(3)); // returns -1 because the cache reached it's capacity and 3 was the least recently used entry
