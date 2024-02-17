// Define a symbol named 'mySymbol'
const mySymbol = Symbol("$");

// Create an object named 'user' with various properties
const user = {
    name: "sanchit",
    "div": "A",
    age: 21,
    college: "GHRCEM",
    isAiStudent: true,
    skill: ["java", "js", "RDBMS", "UI"],
    [mySymbol]: "$"  // Using computed property names to assign a symbol as a property
};

// Accessing properties of the 'user' object using dot notation and bracket notation
// console.log(user.skill); 
// console.log(user["div"]); 
// console.log(typeof user[mySymbol]); 

// Accessing the value associated with the 'mySymbol' property of the 'user' object
// console.log(user[mySymbol]); 

// Modifying the 'skill' property of the 'user' object
user.skill.pop();  // Remove the last element from the 'skill' array
// Object.freeze(user);  // Freezing the 'user' object to make it immutable
user.skill.pop();  // Remove another element from the 'skill' array
user.age = 55;  // Modify the 'age' property of the 'user' object

// Adding methods to the 'user' object
user.greeting = function() {
    console.log("Hello JS user");
};
user.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

console.log(user.greeting());
console.log(user.greetingTwo());