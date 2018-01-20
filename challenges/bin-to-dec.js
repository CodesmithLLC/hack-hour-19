/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  // Recursive function
  if (!binary.length) return 0;
  return binToDec(binary.slice(1)) + binary[0] ? Math.pow(2, binary.length - 1) : 0;
}

console.log(binToDec(0));
module.exports = binToDec;
