/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  /* O(n) time */
  const tracker = {};
  for (let i = 0; i < array.length; i++) {
    if (!tracker[array[i]]) tracker[array[i]] = 1;
    else return array[i];
  }

  /* BRUTE FORCE
  for (let i = 1; i < array.length; i++) {
    if (array.indexOf(i) !== array.lastIndexOf(i)) return i;
  }
  */
}
// const arr = [1, 3, 4, 4, 2];
// console.log(repeatNumbers(arr));
// module.exports = repeatNumbers;
