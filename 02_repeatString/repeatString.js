const repeatString = function(word, numOfTimes) {
    let string = "";
    for (let i = 1; i <= numOfTimes; i++){
        string += word;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
