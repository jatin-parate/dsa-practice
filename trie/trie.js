/* eslint-disable no-param-reassign */

import { Map } from 'immutable';

/**
 * Questions to ask
 * - does it support empty string?
 */
class Trie {
  /** @type {Record<string, any> | null} */
  #dictionary = null;

  constructor() {
    this.#dictionary = {};
  }

  /** @type {Map} */
  get dictionary() {
    return new Map(this.#dictionary);
  }

  /**
   * @param {string} word
   * @param {number} i
   * @param {Record<string, any>} currStage
   */
  #addWord(word, i, currStage) {
    const char = word.charAt(i);
    const isLastChar = i === word.length - 1;

    if (currStage[char] == null) {
      currStage[char] = {
        isEnd: isLastChar,
      };
    }

    if (isLastChar) {
      if (!currStage[char].isEnd) {
        currStage[char].isEnd = true;
      }
      return;
    }

    this.#addWord(word, i + 1, currStage[char]);
  }

  addWord(word = '') {
    if (!word) {
      return;
    }

    this.#addWord(word, 0, this.#dictionary);
  }

  /**
   * @param {string} word
   * @param {number} i
   * @param {Record<string, any>} currStage
   * @returns {boolean}
   */
  #hasWord(word, i, currStage) {
    const char = word.charAt(i);
    const isLast = i === word.length - 1;

    if (currStage[char] == null) {
      return false;
    }

    if (isLast) {
      return currStage[char].isEnd;
    }

    return this.#hasWord(word, i + 1, currStage[char]);
  }

  hasWord(word = '') {
    if (!word) {
      return false;
    }

    return this.#hasWord(word, 0, this.#dictionary);
  }
}

const trie = new Trie();

trie.addWord('jatin');
trie.addWord('ja');

console.log(
  trie.hasWord('jatin'),
  trie.hasWord('jat'),
  JSON.stringify(trie.dictionary, null, 2),
);
