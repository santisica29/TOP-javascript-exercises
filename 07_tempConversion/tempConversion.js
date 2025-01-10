const convertToCelsius = function(numInF) {
  let numInC = (numInF - 32) * (5/9);
  let numRoundUp = numInC.toFixed(1)
  return Number(numRoundUp);
};
// (x − 32) × ⁠5/9⁠ °C 

const convertToFahrenheit = function(numInC) {
  let numInF = (numInC * (9/5) + 32);
  let numRoundUp = numInF.toFixed(1)
  return Number(numRoundUp);
};
// (x × ⁠9/5⁠ + 32) °F 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
