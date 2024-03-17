/* important terms*/
// 1. array_name.pop();
// 2. array_name.shift();
// 3. array_name.splice();
// 4. array_name.push();
// 5. array_name.length: we may also delete element at last range by resizing array through length





/*JavaScript Array is a data structure that allows you to store and 
organize multiple values within a single variable. It is a versatile and 
dynamic object. It can hold various data types, 
including numbers, strings, objects, and even other arrays.  */

/* array can be declared with
1. using literal
2. using new keyword( array constructor)
*/

let names= ["Rahul","Nikhil","Alok"];
console.log(names.toString());

let names2= new Array("Rahum","akram","maksad nhi bhulna!");
console.log(names2);

/* Basic operator in array*/


// modifying array elements in array:
let course= ["physics","maths","chemistry"];
course[1]="biology";
console.log(course);

//Adding element to the array:
course.push("English");
console.log(course);

// removing elements:
course.pop();
console.log(course);

// removing first element:
course.push("hindi");
course.shift();
console.log(course);
// removing any range of elemtns in array:
course.splice(1,2);
console.log(course);

// array length
course.push("Punjabi");
course.push("Bhojpuri");
course.push("Maths");
console.log("Length of the array is: "+course.length);

/*Iterating Through Array Elements
We can iterate array and access array elements using for and forEach loop.


*/

