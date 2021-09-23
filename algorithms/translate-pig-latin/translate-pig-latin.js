function translatePigLatin(str) {
  const match = str.match(/(^[^aeiou]+)([\w]*)/);

  return match ? `${match[2]}${match[1]}ay` : `${str}way`;
}

module.exports = translatePigLatin;

console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('rhythm'));
