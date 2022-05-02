import assert from "assert";

function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let distance = Infinity;
  let ret = -1;

  points.forEach(([pointX, pointY], i) => {
    if (x !== pointX && y !== pointY) {
      return;
    }

    const currDistance = Math.abs(x - pointX) + Math.abs(y - pointY);
    if (currDistance < distance) {
      distance = currDistance;
      ret = i;
    }
  });

  return ret;
}

assert.equal(
  nearestValidPoint(3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ]),
  2
);

assert.equal(nearestValidPoint(3, 4, [[3, 4]]), 0);

assert.equal(nearestValidPoint(3, 4, [[2, 3]]), -1);
