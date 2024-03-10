const add = function(a,b) {
	let result = a + b;
  return result;
};

const subtract = function(a,b) {
	let result = a - b;
  return result;
};

const sum = function(A) {
	let result = 0;
  for(let i=0; i<A.length; i++){
    result = result + A[i];
  }
  return result;
};

const multiply = function(A) {
  let result = 1;
	for(let i=0; i<A.length; i++){
    result = result * A[i];
  }
  return result;
};

const power = function(a,b) {
	let result = a ** b;
  return result;
};

const factorial = function(a) {
  let result = 1;
	for(let i=1; i<a+1; i++){
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
