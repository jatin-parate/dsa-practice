import assert from "assert";

function suggestedProducts(products: string[], searchWord: string): string[][] {
  const results: string[][] = [];
  products.sort();
  let l = 0;
  let r = products.length - 1;

  for (let i = 0; i < searchWord.length; i += 1) {
    const char = searchWord[i];
    while (l < r) {
      if (products[l].length - 1 < i || products[l][i] !== char) {
        l += 1;
      } else {
        break;
      }
    }
    while (r >= l) {
      if (products[r].length - 1 < i || products[r][i] !== char) {
        r -= 1;
      } else {
        break;
      }
    }
    results.push([]);
    for (let j = l; j <= r && j - l < 3; j += 1) {
      results[i].push(products[j]);
    }
  }

  return results;
}

assert.deepEqual(
  suggestedProducts(
    ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    "mouse"
  ),
  [
    ["mobile", "moneypot", "monitor"],
    ["mobile", "moneypot", "monitor"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
  ]
);

assert.deepEqual(suggestedProducts(["havana"], "havana"), [
  ["havana"],
  ["havana"],
  ["havana"],
  ["havana"],
  ["havana"],
  ["havana"],
]);

assert.deepEqual(
  suggestedProducts(["bags", "baggage", "banner", "box", "cloths"], "bags"),
  [
    ["baggage", "bags", "banner"],
    ["baggage", "bags", "banner"],
    ["baggage", "bags"],
    ["bags"],
  ]
);
