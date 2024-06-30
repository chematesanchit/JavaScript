function calculator() {
    const app = "calculator";
    function add(a,b) {
        let c = a+b;
        console.log(app);
    }
    // console.log(c); // c is define in internal scope cant acces here it will give error
    add()
    
 
}

calculator();

// ++++++++++++++++++ interesting ++++++++++++++++++hosting


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)  ////  this will give error 
const addTwo = function(num){
    return num + 2
}