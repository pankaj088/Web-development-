
function my(x) {
    console.log(x)
}
my("Parameter pass karbya");
//

// Named function- function bana kai function ka nam diye oo named function
// varible banya

let make = function fun_name(z) {
    console.log(z)
    fun_name("Named function")
}
//


// Anonymous function- bina nam kai function banya oo Anonymous function
let make1 = function (y) {
    console.log(y)
}
make1("Anonymous function")


// IIFE(immediately invoked function expression ) - n kue varible name n kue function name
let c;
(function (c) {
    console.log("immediately invoked function expression")
    console.log(c);
})("c variable banya");
//


// Arrow Function =()=>{}
const fun = () => {
    console.log("Arrow function");
}
fun();
//Method-2 : ak variable bana kar (let x;)
let x;
const fun1 = x => {
    console.log("Arrow function" + x);
}
fun1(" + variable x ko add kiya");
//


// Recursion - call itself
function factorl(t) {
    if (t == 0) {
        return 1;
    }
    else {

        return t * factorl(t - 1);
    }
}
console.log(factorl(5));

// Arrow method
const fact = (w) => {
    if (w == 0) {
        return 1;
    }
    else {
        return w * fact(w - 1);
    }
}
console.log(fact());

