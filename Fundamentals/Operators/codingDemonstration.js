// assessment operator example: 
let x=5;
console.log(x);
let y=x*43;
y=y+13;
console.log(y);

let z= 12*12;
console.log(z);
let a= 5;
console.log(a>>=2);

/* very important */
/* Nullish Coalescing Assignment */
/* new operator introduced by javascript. This operator is represented by 
x ??= y and it is called Logical nullish assignment operator. Only if the 
value of x is nullish then the value of y will be assigned to x that means 
if the value of x is null or undefined then the value of y will be assigned to x.
*/

let operator1= null;
let operator2= 23;
operator1??=operator2;
console.log(operator1);
/* in the above code, nullish coalescing means if one variable is null, assigned it 
the value of given second variable.*/
