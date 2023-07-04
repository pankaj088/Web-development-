
//var functional scope hota hai yai bas function kai ander hi access kar sakte hai : var ko resign or redefinend Kar sakte hai  

function banya() {
    var a = "var is functional scope";
    console.log(a);
}

let x = 100;
// let x = 100;
// let & const - block scope hota hai : esko reasign or redeclear nhi kar sakte hai
console.log(x);

// const - ko imadaitly value deni parti hai || const ka value change nhi kar sakte hai :Ex-
// const l;
// l = 200;
const l = 200;
console.log(l);

// function ko call kiya
banya();



//HOISTING
// Hoisting -variable decleartion ko hmisa hosted yani ki upper kai trah move kar deta hai :Ex-
console.log(z)
var z;
// hosting kai time javascript sirf declear(var z) ko hi top pai vaijt hai islye undefined print kariga
// var z;
// console.log(z)
z = "instilaztion kai time hosting nhi hoti hai"


// Temporal Dead Zone - variablre decleartion to variable initilization kai bich kai time period (TDZ)
console.log(P)
let P;
p = "TDZ"