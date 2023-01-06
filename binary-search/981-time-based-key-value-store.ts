class TimeMap {
  map = new Map<string, [string, number][]>();

  constructor() {}

  set(key: string, value: string, timestamp: number): void {
    const list = this.map.get(key) ?? [];

    list.push([value, timestamp]);

    this.map.set(key, list);
  }

  get(key: string, timestamp: number): string {
    const list = this.map.get(key);

    if (!list) {
      return "";
    }

    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      const [value, time] = list[mid];

      if (time === timestamp) {
        return value;
      }

      if (time > timestamp) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // left is 0, left is list.length, or middle
    if (left === 0) {
      return "";
    }

    if (left === list.length) {
      return list[left - 1][0];
    }

    return list[left][1] > timestamp ? list[left - 1][0] : list[left][0];
  }
}
