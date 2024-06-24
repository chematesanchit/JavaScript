function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");
    
}
//sayMyName()

function add(N1, N2) {
    console.log(N1+N2)
    
}
//add(5,6)

function longinUserMessage(username ="sanchit") {// usernmae = "sanchit" it will take sanchit if no parameter provided"
    if (username === undefined){
        console.log("enter username")
        return
    }
    return `${username} just logged in`
    
}
console.log (longinUserMessage("viki"))

function calculatePrice(...num1) {// (...num1) this is rest operator it bundled all element in parameter 
    return num1
    
}
console.log(calculatePrice(200,400,500))

const myNewArray = [200,400,300,222,455,566]
function returnSecondValue(array){
return array[1]
}
// console. tog (returnSecondVatue (myNewArray)) ;
console.log (returnSecondValue(myNewArray) ) ;
