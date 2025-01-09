const sumAll = function (initialNum, finalNumber) {
  let sum = 0;

  if ((initialNum < 0 || finalNumber < 0) || (!Number.isInteger(initialNum) || !Number.isInteger(finalNumber)) || (isNaN(initialNum) || isNaN(finalNumber))) {
    return "ERROR";
  }

  if (initialNum > finalNumber) {
    let helper = initialNum;
    initialNum = finalNumber;
    finalNumber = helper;
  }

  for (let i = initialNum; i <= finalNumber; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
