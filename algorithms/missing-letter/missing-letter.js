function missingLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const strArr = str.split('');

  const indexStart = alphabet.indexOf(str[0]);
  for (let i = 1; i < str.length; i++) {
    if (strArr[i] !== alphabet[indexStart + i]) return alphabet[indexStart + i];
  }
  return undefined;
}

module.exports = missingLetter;
