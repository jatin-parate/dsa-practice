class Trie {
  isEnd = false;

  /**
   * @type { Map<string, Trie> }
   */
  #dictionary = new Map();

  /**
   *
   * @param {string} word
   * @param {number} i
   * @returns {void}
   */
  #addWord(word, i) {
    const char = word.charAt(i);
    const isLastChar = i === word.length - 1;

    if (!this.#dictionary.has(char)) {
      const newTrie = new Trie();
      newTrie.isEnd = isLastChar;
      this.#dictionary.set(char, newTrie);
    }

    const trie = this.#dictionary.get(char);

    if (isLastChar) {
      if (trie.isEnd) {
        trie.isEnd = true;
      }
      return;
    }

    trie.addWord(word, i + 1);
  }

  /**
   *
   * @param {string} word
   * @returns {void}
   */
  addWord(word = '', i = 0) {
    if (!word) {
      return;
    }

    this.#addWord(word, i);
  }

  /**
   * @param {string} word
   * @param {number} i
   * @returns {boolean}
   */
  #hasWord(word, i) {
    const char = word.charAt(i);
    const isLast = i === word.length - 1;

    if (!this.#dictionary.has(char)) {
      return false;
    }

    const trie = this.#dictionary.has(char);

    if (isLast) {
      return trie.isEnd;
    }

    return trie.hasWord(word, i + 1);
  }

  /**
   *
   * @param {string} word
   * @returns {boolean}
   */
  hasWord(word = '', i = 0) {
    if (!word) {
      return false;
    }

    return this.#hasWord(word, i);
  }
}

const trie = new Trie();

trie.addWord('jatin');
trie.addWord('parate');
trie.addWord('ja');

console.log(
  trie.hasWord('jatin'),
  trie.hasWord('jat'),
  JSON.stringify(trie, null, 2),
);
