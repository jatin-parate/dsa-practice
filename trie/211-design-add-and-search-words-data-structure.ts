class Trie {
  private map = new Map<string, Trie>();

  constructor() {}

  addWord(word: string): void {
    if (!word) return;

    if (!this.map.has(word[0])) {
      this.map.set(word[0], new Trie());
    }

    const trie = this.map.get(word[0])!;
    trie.addWord(word.slice(1));
  }

  hasWord(word: string): boolean {
    if (!word) return true;

    if (word[0] === ".") {
      const keys = [...this.map.keys()];

      for (let key of keys) {
        const trie = this.map.get(key)!;
        if (trie.hasWord(word.slice(1))) {
          return true;
        }
      }

      return false;
    }

    if (this.map.has(word[0])) {
      const trie = this.map.get(word[0])!;
      return trie.hasWord(word.slice(1));
    }

    return false;
  }
}

export class WordDictionary {
  private trie = new Trie();

  constructor() {}

  addWord(word: string): void {
    this.trie.addWord(word);
  }

  search(word: string): boolean {
    return this.trie.hasWord(word);
  }
}
