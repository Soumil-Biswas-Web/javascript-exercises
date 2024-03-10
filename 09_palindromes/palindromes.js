const palindromes = function (string) {
    const dePunct = string.replace(/[^\w]|_/g, ''); //removes punctuations and white space
    const lowercase = dePunct.toLowerCase();
    const strArray = lowercase.split("");
    let mid = Math.floor(strArray.length/2);
    let end = strArray.length-1;
    for (let i=0; i<=mid; i++){
        if (strArray[i] !== strArray[end-i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
