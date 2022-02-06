import runWithTimestamp from './utils/runWithTimestamp';

const arr = [1, 2, 3, 4];
const obj = { first: 'a', second: 'b ' };
const map = new Map();
map.set('first', 'a');
map.set('second', 'b');

runWithTimestamp(() => arr[0], null, 'arr');
runWithTimestamp(() => obj.second, null, 'obj');
runWithTimestamp(() => map.get('second'), null, 'map');

const hashStringToInt = (key) => {
  let hash = 17;
  try {
    for (let i = 0; i < key.length; i += 1) {
      hash *= key.charCodeAt(i);
    }
  } catch {
    console.error('something');
  }

  return hash;
};

class HashTable {
  table = new Array(100);

  setItem = (key, value) => {
    this.table[hashStringToInt(key)] = value;
  }

  getItem = (key) => this.table[hashStringToInt(key)]
}

const myTable = new HashTable();
myTable.setItem('first', 'a');
runWithTimestamp(() => myTable.getItem('first'), undefined, 'hash-table');
