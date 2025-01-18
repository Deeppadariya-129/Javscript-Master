
const m_heros = ["Hulk" , "Thor" , "IronMan"]
const dc_heros = ["Superman" , "Batman"]

const allHeros = m_heros.concat(dc_heros)
console.log(allHeros);

const spreadOppHeros = [m_heros ,...dc_heros]
console.log(spreadOppHeros);


const another_array = [1,2,3,[4,5,6],9,[1,[2,5],8]]
console.log(another_array.flat(Infinity));


console.log(Array.isArray("helloworld")); // false
console.log(Array.from("helloworld")); // ['h','e',...]


let num1 = 100
let num2 = 200
let num3 = 300

// create array with multiple elements 
console.log(Array.of(num1, num2, num3));
