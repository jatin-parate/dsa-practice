type CollectionItem<T> = [T, number];
export class PriorityQueue<T> {
  #collection: CollectionItem<T>[] = [];

  printCollection(): void {
    console.log(this.#collection);
  }

  isEmpty(): boolean {
    return this.#collection.length === 0;
  }

  enqueue(element: CollectionItem<T>): void {
    if (this.isEmpty()) {
      this.#collection.push(element);
      return;
    }

    let added = false;
    for (let i = 0; i < this.#collection.length; i++) {
      if (element[1] < this.#collection[i][1]) {
        this.#collection.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) {
      this.#collection.push(element);
    }
  }

  dequeue(): CollectionItem<T> | undefined {
    return this.#collection.shift();
  }

  front(): CollectionItem<T> | undefined {
    return this.#collection.at(0);
  }

  rear(): CollectionItem<T> | undefined {
    return this.#collection.at(-1);
  }
}

const pr = new PriorityQueue<string>();

pr.enqueue(["Beau Carnes", 2]);
pr.enqueue(["Quincy Larson", 3]);
pr.enqueue(["Ewa Mitulska", 1]);
pr.printCollection();
console.log(pr.dequeue());
console.log(pr.front());
pr.printCollection();
