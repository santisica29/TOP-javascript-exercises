const fibonacci = function(numLimit) {
    if (numLimit < 0) return 'OOPS'
    let n1 = 0;
    let n2 = 1;
    let fiboNum = 0;

    for (let i=0; i < numLimit; i++){
        fiboNum = n1 + n2;

        n1 = n2;
        n2 = fiboNum;

    }

    return n1;
};

fibonacci(3)

// Do not edit below this line
module.exports = fibonacci;
