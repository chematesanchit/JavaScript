// Creating a singleton object named cybervidya
const cybervidya = new Object(); // Singleton object

// Creating a non-singleton object named sanchit
const sanchit = {}; // Not a singleton object

// Assigning properties to the cybervidya object
cybervidya.studet = "sanchit chemate";
cybervidya.cgpa = 8.61;
cybervidya.id = "2020AAIT1108089";
cybervidya.isEligble = true;

// Defining a superset object with nested classDetails object
const superset = {
    supersetId: "q4dfjog",
    email: "sanchitchemate@gmail.com",
    classDetails: {
        attendenceIsEligeble: true,
        backlog: false
    }
}

// Accessing a property of the nested classDetails object
console.log(superset.classDetails.attendenceIsEligeble); // Output: true

// Merging obj1 and obj2 into obj3 using Object.assign()
const obj1 = { 1: "a", 5: "e" };
const obj2 = { 8: "t", 6: "l" };
const obj3 = Object.assign({}, obj1, obj2);
// Output: { '1': 'a', '5': 'e', '8': 't', '6': 'l' }

// Merging cybervidya, obj1, and obj2 into obj4 using spread operator
const obj4 = { ...obj1, ...cybervidya, ...obj2 };
// Output: { '1': 'a', '5': 'e', studet: 'sanchit chemate', cgpa: 8.61, id: '2020AAIT1108089', isEligble: true, '8': 't', '6': 'l' }

// Array of user objects
const users = [
    { id: 1, email: "sanchit@gmail.com" },
    { id: 2, email: "chemate@gmail.com" },
    { id: 3, email: "ghrcem@gmail.com" },
]

// Accessing the email property of the second user object
console.log(users[1].email); // Output: "chemate@gmail.com"

// Logging the cybervidya object and its properties
console.log(cybervidya); // Output: { studet: 'sanchit chemate', cgpa: 8.61, id: '2020AAIT1108089', isEligble: true }
console.log(Object.keys(cybervidya)); // Output: [ 'studet', 'cgpa', 'id', 'isEligble' ]
console.log(Object.values(cybervidya)); // Output: [ 'sanchit chemate', 8.61, '2020AAIT1108089', true ]
console.log(Object.entries(cybervidya)); // Output: [ [ 'studet', 'sanchit chemate' ], [ 'cgpa', 8.61 ], [ 'id', '2020AAIT1108089' ], [ 'isEligble', true ] ]
