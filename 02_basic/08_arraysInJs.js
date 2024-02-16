const arry =["sanchit",1,3,5.6]
const arry2=new Array("chemate",4,66,66.666,34)
//console.log(arry,arry2)

// Array methods

arry.push(7)
arry.push(8)
arry.push(6)
arry.push(45)
arry.pop()
arry.unshift("sanchit")
//console.log(arry)

console.log("A  ", arry)
const array3=arry.slice(2,6)
console.log(array3)
console.log("B ",arry)
const array4=arry.splice(2,6)
console.log(array3)
console.log("c ",arry)

/// advance array  

// Define arrays for Marvel and DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Uncomment the following lines to demonstrate different array manipulation techniques

// Attempt to push the entire DC heroes array into the Marvel heroes array
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // Marvel heroes array remains unchanged
// console.log(marvel_heros[3][1]); // Accessing an element within the nested array, which doesn't exist

// Concatenate Marvel and DC heroes arrays into a new array
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // Display concatenated array of all heroes

// Merge Marvel and DC heroes arrays using the spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // Display merged array of all heroes

// Define an array with nested arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// Flatten the nested arrays in another_array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // Display flattened array

// Check if a string is an array
console.log(Array.isArray("Sanchit")) // false

// Convert a string to an array of characters
console.log(Array.from("Sanchit")) // ['S', 'a', 'n', 'c', 'h', 'i', 't']

// Convert an object to an array
console.log(Array.from({name: "Sanchit"})) // interesting

// Create an array using Array.of method
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
 