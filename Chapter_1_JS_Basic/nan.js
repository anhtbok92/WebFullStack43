var a = 0/0;
console.log(a); // NaN
console.log(typeof a); // number
console.log(a == NaN); //false
console.log(isNaN(a)); // true