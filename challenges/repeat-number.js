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
  let val;
  let cache = {};
  for (let i = 0; i < array.length; i += 1) {
    val = array.pop();
    if (cache.hasOwnProperty(val)) return val;
    cache[val] = 1;
  }
}

module.exports = repeatNumbers;