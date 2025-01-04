const reverseString = (string) => {
    let array = string.split("").reverse();

    let reversedString = array.join("");

    return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
