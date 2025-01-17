// // Date (object type)

let myDate = new Date();

console.log(myDate.toString());
// // Output: "Wed Mar 01 2023 00:00:00 GMT+053

console.log(myDate.toDateString());
// // Output: "Wed Mar 01 2023"

console.log(myDate.toISOString());
// // Output: "2023-03-01T00:00:00.000Z"

console.log(myDate.toJSON());
// // Output: "2023-03-01T00:00:00.000Z"

console.log(myDate.toLocaleDateString());
// // Output: "1/3/2023" (US format)

console.log(myDate.toLocaleString());
// // Output: "1/3/2023, 12:00:00 AM" 


// // Set particular date 

let myCreatedDate = new Date(2050,0,25)
console.log(myCreatedDate.toLocaleString());


// Time Stemp
let newTime = Date.now()

console.log(newTime); // milisecond
console.log(myDate.getTime());

// Coonverting into seconds 
console.log(Math.floor(newTime / 1000)); 



// Customization
console.log(myDate.toLocaleString('default' , {
    weekday : "long"
}));
