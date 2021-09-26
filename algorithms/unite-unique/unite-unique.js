// function uniteUnique(...arr) {
//   const arrSet = new Set();

//   // No mean to currently add whole array to a set use
//   arr.forEach((array) => array.forEach((item) => arrSet.add(item)));
//   return Array.from(arrSet);
// }

function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}

module.exports = uniteUnique;

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
