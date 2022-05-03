import assert from "assert";

function areAlmostEqual(firstStr: string, secondStr: string): boolean {
  let a1 = "";
  let a2 = "";
  let size = firstStr.length;

  for (let i = 0; i < size; i += 1) {
    if (firstStr.charAt(i) !== secondStr.charAt(i)) {
      a1 += firstStr.charAt(i);
      a2 += secondStr.charAt(i);
    }
  }

  a1 = a1.split("").sort().join("");
  a2 = a2.split("").sort().join("");

  return a1.length <= 2 && a1 === a2;
}

assert.equal(areAlmostEqual("bank", "kanb"), true);
assert.equal(areAlmostEqual("attack", "defend"), false);
assert.equal(areAlmostEqual("kelb", "kelb"), true);
assert.equal(
  areAlmostEqual(
    "ysmpagrkzsmmzmsssutzgpxrmoylkgemgfcperptsxjcsgojwourhxlhqkxumonfgrczmjvbhwvhpnocz",
    "ysmpagrqzsmmzmsssutzgpxrmoylkgemgfcperptsxjcsgojwourhxlhkkxumonfgrczmjvbhwvhpnocz"
  ),
  true
);
