const sumAll = function (initialNum, finalNumber) {
  let sum = 0;

  let numIsNegative = (initialNum < 0 || finalNumber < 0);
  let numIsNotAnInteger = (!Number.isInteger(initialNum) || !Number.isInteger(finalNumber));
  let numIsNaN = (isNaN(initialNum) || isNaN(finalNumber));

  if (numIsNegative || numIsNotAnInteger || numIsNaN) {
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
