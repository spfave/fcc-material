function dnaPairing(str) {
  const strandPair = { A: 'T', T: 'A', C: 'G', G: 'C' };

  const dna = str.split('');
  return dna.map((strand) => [strand, strandPair[strand]]);
}

module.exports = dnaPairing;
