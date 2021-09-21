function stringToSpinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/\s|_/)
    .join('-')
    .toLowerCase();
}

// using positive lookahead: https://www.regular-expressions.info/lookaround.html
/*function stringToSpinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
} */

module.exports = stringToSpinalCase;

console.log(stringToSpinalCase('ThisIsSpinalTap'));
