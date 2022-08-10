interface IMonarchy {
  birth(child: string, parent: string): void;
  death(name: string): void; // if a person dies, they are removed from monarchy but their children are still considered monarchs
  getOrderOfSuccession(): Array<String>;
}

class NArrayTree {
  #isDead = false;
  #children: NArrayTree[] = [];
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  birth(child: string, parent: string): boolean {
    if (this.#name === parent) {
      const newNode = new NArrayTree(child);
      this.#children.push(newNode);
      return true;
    }

    return this.#children.some((childNode) => childNode.birth(child, parent));
  }

  death(name: string): boolean {
    if (name === this.#name) {
      this.#isDead = true;
      return true;
    }

    return this.#children.some((childNode) => {
      return childNode.death(name);
    });
  }

  getOrderOfSuccession(succession: string[] = []) {
    if (!this.#isDead) {
      succession.push(this.#name);
    }

    this.#children.forEach((childNode) => {
      childNode.getOrderOfSuccession(succession);
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
    if (!this.root.death(name)) {
      throw new Error("Person not found");
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
