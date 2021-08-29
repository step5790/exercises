"use strict";

const bool= true;
const num=13;
const str = "1";
const str1 = "peter";
const obj = ["cat:1", "cat1:2"];
const obj1 = {dog:1, dog1:2};
const nothing=null;
let unf;
const symbol = Symbol("symbol");


console.log(bool);
console.log(num);
console.log(str1);
console.log(obj1);

obj.forEach(function(entry) {
    console.log(entry);
});



console.log(nothing);
console.log(unf);
console.log(symbol);

// convert string to a number

console.log(Number(str)+Number(str));
console.log(num+num);

