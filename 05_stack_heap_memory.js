// Types of Memory in js 
// 1.Stack Memory (use in primitive types)
// it provide an coppy of the value and store it in memory
// 2.Heap Memory (use in no primitive types)
// it provide a reference to the value and store it in memory


// Stack Example 
let userName = "HelloWorld"

let anotherName = userName

console.log(anotherName);

anotherName = "hello"

console.log(userName);
console.log(anotherName);


// Heap Example
let arr = [1,2,3]

let userObj = {
    Name : "john",
    Email : "john@gmail.com"
}

console.log(userObj);

let anotherObj = userObj 
anotherObj.Email = "paul@gmail.com"

console.log(anotherObj);
console.log(userObj);
// here refrence is also change



