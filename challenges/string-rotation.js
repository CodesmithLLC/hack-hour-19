/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let s1Arr = s1.split('');
  for(var i = 0; i < s1.length; i++){
    let end = s1Arr.pop();
    // let nArr = s1Arr.shift();
    // console.log(s1Arr);
    let rotate = s1Arr.unshift(end);
    if(s1Arr.join('') == s2) {
      return true;
    }

    // console.log(nArr.unshift(end))
  }
  return false;
}
console.log(stringRotation("hello", "hello"));
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
