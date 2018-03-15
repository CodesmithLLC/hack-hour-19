/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
a = Math.abs(a);
b = Math.abs(b);

if(b > a) {var temp = a; a = b; b = temp;}
while(true) {
    if(b === 0 ) return a;
    a %= b;
    if( a === 0 ) return b;
    b%= a;
  }
}

module.exports = gcd;