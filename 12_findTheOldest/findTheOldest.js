

const findTheOldest = function (arr) {
  let sortArr = arr.sort((a, b) => {
    let currentYear = new Date().getFullYear();
    if (a.yearOfDeath === undefined) {
      a.yearOfDeath = currentYear;
    } 
    
    if (b.yearOfDeath === undefined) {
      b.yearOfDeath = currentYear;
    }

    let age1 = (a.yearOfDeath - a.yearOfBirth);
    let age2 = (b.yearOfDeath - b.yearOfBirth);
    return age2 - age1
  });

  let oldestPerson = sortArr[0]

  return oldestPerson;
};
// Do not edit below this line
module.exports = findTheOldest;
