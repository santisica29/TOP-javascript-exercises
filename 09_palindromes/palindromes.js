const palindromes = function (word) {
  let abc = "abcdefghijklmnopqrstvwxyz0123456789";

  word = word
    .toLowerCase()
    .split("")
    .filter((x) => abc.includes(x))
    .join("");


  let wordBackwards = word
    .split("")
    .reverse()
    .join("");

  return word === wordBackwards;
};

// Do not edit below this line
module.exports = palindromes;
