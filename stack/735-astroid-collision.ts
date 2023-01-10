export function asteroidCollision(asteroids: number[]): number[] {
  let stack: number[] = [];

  while (true) {
    let isCollided = false;
    for (let i = 0; i < asteroids.length; i++) {
      const asteroid = asteroids[i];

      if (stack.length === 0) {
        stack.push(asteroid);
        continue;
      }

      const top = stack.at(-1)!;
      if (top < 0) {
        stack.push(asteroid);
        continue;
      }

      if (top > 0 && asteroid < 0) {
        isCollided = true;
        const asteroidSize = Math.abs(asteroid);
        const topSize = Math.abs(top);
        if (asteroidSize === topSize) {
          stack.pop();
        } else if (topSize < asteroidSize) {
          stack.pop();
          stack.push(asteroid);
        } else {
          // Do nothing
        }
      } else {
        stack.push(asteroid);
      }
    }

    asteroids = stack;
    stack = [];

    if (!isCollided) {
      break;
    }
  }

  return asteroids;
}
console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
