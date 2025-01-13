const num1 = 100

console.log(num1);
console.log(typeof num1);

const num2 = new Number(200)
console.log(num2);

const num3 = 1000000

console.log(num3.toFixed(5));
console.log(num3.toLocaleString());
console.log(num3.toLocaleString('en-IN'));


const num4 = 100.24599
console.log(num4.toPrecision(5));



// +++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++

// we need number b/w 10 to 20


// Important Math methods 
// 1.random 
// 2.floor
// 3.round
// 4.cile
// 5.abs
// 6.max
// 7.min


const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+10));


