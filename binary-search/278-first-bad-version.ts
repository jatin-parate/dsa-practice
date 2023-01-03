/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function check(n: number): number {
    let left = 1,
      right = n;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const isMidBad = isBadVersion(mid);

      if (!isMidBad) {
        left = mid + 1;
      } else {
        if (mid === left) {
          return mid;
        }

        if (isBadVersion(mid - 1)) {
          right = mid - 1;
        } else {
          return mid;
        }
      }
    }
  };
};
