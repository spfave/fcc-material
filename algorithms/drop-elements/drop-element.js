function dropElements(arr, func) {
  // For loop
  // for (const [i, item] of arr.entries()) {
  //   if (func(item)) return arr.slice(i);
  // }
  // return [];

  // Find index
  const idx = arr.findIndex(func);
  return idx > -1 ? arr.slice(idx) : [];
}

module.exports = dropElements;

// Testing
console.log(dropElements([1, 2, 3, 4], (n) => n > 2));
