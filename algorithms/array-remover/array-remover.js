// Using array filter method
function arrayRemover(arr, ...args) {
  return arr.filter((item) => !args.includes(item));
}

module.exports = arrayRemover;
