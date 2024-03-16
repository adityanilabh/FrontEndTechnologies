/* There are  two types of data types in javascript.
   1. Primitive data types: 7 in numbers;
   2. Non-primitive data types( reference types): objects

*/

let a=5 // number
let b= "Hey! There"; // string
let c= false; // boolean
let d=null; // null
let e; // undefined
let f= Symbol("helloG"); // Symbol
let g= BigInt(132323);

function print(x)
{
    console.log(x);
}
print(a);
print(b);
print(c);
print(d);
print(e);
print(f);
print(g);

// now showing the non-primitive data type here: 

let person= {firstname: "John", LastName: "Harris", Age: 23};
console.log(person);