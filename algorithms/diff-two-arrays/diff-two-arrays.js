// Brute force
/* function diffTwoArrays(arr1, arr2) {
  const newArr = [];

  for (const item of arr1) {
    if (arr2.indexOf(item) < 0) newArr.push(item);
  }
  for (const item of arr2) {
    if (arr1.indexOf(item) < 0) newArr.push(item);
  }

  return newArr;
} */

// Concat arrays and filter
function diffTwoArrays(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !(arr1.includes(item) && arr2.includes(item)));
}

// Use Set conversion for one array
/* function diffTwoArrays(arr1, arr2) {
  const setArr1 = new Set(arr1);

  for (const item of arr2) {
    setArr1.has(item) ? setArr1.delete(item) : setArr1.add(item);
  }
  return [...setArr1];
} */

module.exports = diffTwoArrays;
