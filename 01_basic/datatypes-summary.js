//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array,/

/*Arrays in JavaScript are used to store multiple values in a single variable.
They are ordered collections of values, where each value is identified by an index starting from 0.
Array elements can be of any data type, including other arrays, objects, or functions.
Common array methods include push, pop, shift, unshift, slice, and splice. */
let myArray = [1, 'hello', true, [3, 4], { key: 'value' }];


// Objects 
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

// Functions
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack and Heap memory in javascript
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Stack (primatie), Heap (Non-premitive )


 */