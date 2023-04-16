const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  
  //creating frequency tables for each string s1 and s2
  const frequency1 = createFrequencyTable(s1);
  const frequency2 = createFrequencyTable(s2);

  let commonCount = 0;

  for (const character in frequency1) {
    if (frequency2[character]) {
      commonCount += Math.min(frequency1[character], frequency2[character]);
    }
  }

  return commonCount;
}

function createFrequencyTable(string) {
  const frequency = {};

  for (const character of string) {
    frequency[character] = frequency[character] ? frequency[character] + 1 : 1;
  }

  return frequency;
}

module.exports = {
  getCommonCharacterCount
};
