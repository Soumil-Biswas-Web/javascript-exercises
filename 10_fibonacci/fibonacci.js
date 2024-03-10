const fibonacci = function(n) {
    let input = Number(n);
    let a = 0;
    let b = 1;
    let temp = 0;
    if (input < 0){
        return "OOPS";
    }
    else if(input == 0){
        return a;
    }
    else if(input > 1){        
        for (let i=2; i<input+1; i++){
            temp = b;
            b = a + b;
            a = temp;
        }    
    }
    return b; 
};

// Do not edit below this line
module.exports = fibonacci;
