/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// eslint-disable-next-line no-unused-vars
const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
};
