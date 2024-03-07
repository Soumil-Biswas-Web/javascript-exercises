const sumAll = function(intA, intB) {
    let total = 0;
    let temp = 0;
    if (intA > intB){
        temp = intB;
        intB = intA;
        intA = temp;
    }
    if (intA < 0 || intB < 0 || typeof intA != 'number' || typeof intB != 'number'){
        return 'ERROR';
    }
    for(let i=intA; i<intB+1; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
