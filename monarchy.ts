interface IMonarchy {
  birth(child: string, parent: string): void;
  death(name: string): void; // if a person dies, they are removed from monarchy but their children are still considered monarchs
  getOrderOfSuccession(): Array<String>;
}

class NArrayTree {
  public children: NArrayTree[] = [];

  constructor(public name: string) {}

  birth(child: string, parent: string): boolean {
    if (this.name === parent) {
      const newNode = new NArrayTree(child);
      this.children.push(newNode);
      return true;
    }

    return this.children.some((childNode) => childNode.birth(child, parent));
  }

  death(name: string): boolean {
    return this.children.some((childNode, i) => {
      if (childNode.name === name) {
        if (childNode.children.length === 0) {
          this.children.splice(i, 1);
        } else {
          const [firstChild] = childNode.children.splice(0, 1);
          firstChild.children.push(...childNode.children);
          this.children[i] = firstChild;
        }
        return true;
      }

      return childNode.death(name);
    });
  }

  getOrderOfSuccession() {
    const succession: string[] = [this.name];

    this.children.forEach((childNode) => {
      succession.push(...childNode.getOrderOfSuccession());
    });

    return succession;
  }
}

class Monarchy implements IMonarchy {
  private root: NArrayTree | null = null;

  constructor(currentKing: string) {
    this.root = new NArrayTree(currentKing);
  }

  birth(child: string, parent: string): void {
    if (!this.root || !this.root.birth(child, parent)) {
      throw new Error("parent not found");
    }
  }

  death(name: string): void {
    if (!this.root) {
      throw new Error("All are dead already!");
    }

    if (this.root.name === name && this.root.children.length === 0) {
      this.root = null;
      return;
    }

    if (!this.root.death(name)) {
      throw new Error("Person not found!");
    }
  }

  getOrderOfSuccession(): Array<String> {
    if (!this.root) {
      return [];
    }

    return this.root.getOrderOfSuccession();
  }
}

const monarchy = new Monarchy("jake");
monarchy.birth("calley", "jake");
monarchy.birth("jhon", "jake");
monarchy.birth("json", "jake");
monarchy.birth("karl", "calley");
monarchy.birth("zor", "karl");
monarchy.birth("barry", "json");

monarchy.death("calley");

console.log(monarchy.getOrderOfSuccession());
