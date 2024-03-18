/*JavaScript Numbers are primitive data types. Unlike other programming languages,
 you don’t need int, float, etc. to declare different numeric values. JavaScript 
 numbers are always stored in double-precision 64-bit binary format IEEE 754. 

This format stores numbers in 64 bits, 

0-51 bit stores value(fraction)
52-62 bit stores exponent
63-bit stores sign
*/
/* number coercion in javascript*/
/*In JavaScript, coercion refers to the automatic or implicit conversion 
of values from one data type to another. When different types of operators are 
applied to values, JavaScript performs type coercion to ensure that the operation 
can proceed. Let’s explore some common examples of coercion: */
// adding number and string:
let a=5;
let b="ste";
let c=a+b;
console.log(c); //5ste.
console.log(typeof(c)); // string

let d= b+a;
console.log(d); // again string.--|
console.log(typeof(d));      

// airthemetic operation on numeric string will become numbers;
let op1= "234"/"3";
console.log(op1);

const newLocal = 229;
// octal number: 
let num1= newLocal;
console.log(num1);
let num3=0b111;
console.log(num3);

// creation of number object
let numberObject= new Number("1000");
console.log(numberObject);

let maxNumber= Number.MAX_VALUE;
let minNumber= Number.MIN_VALUE;
console.log(maxNumber+"and this is min: "+minNumber);
