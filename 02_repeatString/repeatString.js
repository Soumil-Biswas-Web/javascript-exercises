const repeatString = function(inputString, repeatNumber) {
    if (repeatNumber < 0) return 'ERROR';
    let outputString = '';
    for(let i = 0; i<repeatNumber; i++){
        outputString = outputString + inputString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
