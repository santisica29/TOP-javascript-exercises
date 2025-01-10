const leapYears = year => {
    let isDivisibleByFour = year % 4 === 0;
    let isDivisibleBy100 = year % 100 === 0;
    let isDivisibleBy400 = year % 400 === 0;

    return isDivisibleBy400 || (isDivisibleByFour && !isDivisibleBy100);
};

leapYears(1900);

/*Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years)*/
// Do not edit below this line
module.exports = leapYears;
