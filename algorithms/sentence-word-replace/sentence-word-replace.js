function capitalCase(str) {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

// Set string fromCase to string toCase
function matchCase(fromCase, toCase) {
  const lowerCase = /^[a-z]/;
  const upperCase = /^[A-Z]/;
  let newCase = '';

  if (lowerCase.test(fromCase) && upperCase.test(toCase)) {
    newCase = capitalCase(fromCase);
  } else if (upperCase.test(fromCase) && lowerCase.test(toCase)) {
    newCase = fromCase.toLowerCase();
  } else {
    newCase = fromCase;
  }
  return newCase;
}

function sentenceWordReplace(str, before, after) {
  const replace = matchCase(after, before);
  return str.replace(before, replace);

  // const sentenceCheck = new RegExp(`${before}`);
  // if (sentenceCheck.test(str)) console.log('found before');
}

module.exports = sentenceWordReplace;

console.log(sentenceWordReplace('Let us go to the Store', 'store', 'mall'));
console.log(capitalCase('test'));
