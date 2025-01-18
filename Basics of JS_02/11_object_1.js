
// if object is created using counstructor then its sigleton other wise no singleton  
// Object.create()


// Object Literals

let mySymbol = Symbol("key1")
const obj = {
    name : "John",
    age : 22,
    [mySymbol] : "mySym" ,  //adding symbol into obj 
    "Full Name" : "John Paul",
}

console.log(typeof obj);
console.log(obj.age); //mot batter way
console.log(obj["age"])
console.log(obj["Full Name"])
console.log(obj[mySymbol])

// Object.freeze(obj) :- it stop modification into perticular Obj


obj.greatting = function () {
    console.log("Hello obj");  
}

obj.greatting2 = function () {
    console.log(`Hello , ${this.name} `);  
}

console.log(obj.greatting());
console.log(obj.greatting2());
