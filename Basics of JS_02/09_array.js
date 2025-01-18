// Array 

const array1 = [1,5,8,10,100]

const array2 = ["John" , "Paul" , "Jesica"]

const arr3 = new Array(5, 10, 15, 20, 25)

// console.log(arr3);
// Output: [5, 10, 15, 20, 25]

// console.log(array2[0]);
// Output: John

// Array Methods
array1.push(6) // Add element to the end of the array
array1.pop(6) // Remove the last element from the array
array1.unshift(69) // add to the beginning
array1.shift(69) // remove from the beginning
// console.log(array1); 

const newArr = [1,2,3,4,5]
// console.log(newArr.join()); // Output: 1,2,3,4,5,

const arr = newArr.join()
// console.log(arr); // Output: 12345
// console.log(typeof arr);


// Slice and Splice 

const newArray = [1,2,3,4,5]

console.log("a:" , newArr);
console.log(newArray.slice(1,3));
console.log("b:" , newArray);
console.log(newArr.splice(2,3));
console.log("c:" , newArray);








