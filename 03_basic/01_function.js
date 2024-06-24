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