const removeFromArray = function(inputArray, ...itemsToBeRemoved) {
    for(const arg of itemsToBeRemoved){
        for(let i=0; i<inputArray.length; i++){
            if(arg === inputArray[i]){
                inputArray.splice(i, 1);
                i = 0;
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
