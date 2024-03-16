/* variable are declared using three ways: 
1. let
2. const
3. var
*/
let a=5;
var b=8;
const c=9;

function print (x)
{
    console.log(x);
}
print(a);
print(b);
print(c);

// we can't change a value of varible that is assigned const, but we can add elements in 
  // a object defined with const.

/* The newly introduced keywords let and const are block scoped whereas var is 
function scoped.  */
// example: 
{
    let ax="papapa";
    var bx=23;
    console.log(ax);
    console.log(bx);
}
//console.log(ax); will throw error
console.log("this is" +bx); // here var has a value 23 as var is not block scope.
// var is functional scoped.


/* properties of each variable types: */
console.log("Here is the properties of each variable: ");

let _lets={
    scope:"block scope",
    updation: "mutable",
    redeclaration: "no",
    hoisting:"at top(does not support hoisting)"
};

var _var={
    scope:"functional scope",
    updation: "mutable",
    redeclaration: "yes",
    hoisting:"at top"
};

const _consts ={
    scope:"block scope",
    updation: "immutable",
    redeclaration: "no",
    hoisting:"at top(doesn't support hoisting)"
}

console.log("Property of lets: ");
console.log(_lets);
console.log("Property of const: ");
console.log(_consts);
console.log("Property of var: ");
console.log(_var);