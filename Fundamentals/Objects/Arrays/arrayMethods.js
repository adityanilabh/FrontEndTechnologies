/* Here are some array methods
1. <array_name>.length : length of array; 
2. <array_name>.toString() : changing array to string ;
3. <array_name>.join() : join() method help to join  arrays as string. ;
4. delete array_name[index] : deleting method is used to delete one index of array method 
5. <array_name>.concat() : concatination 2 or more arrays ;
6. <array_name>.flat(infinity) : if we want to make multidimensional array in one dimension ;
7. <array_name>.push() : if we want to add element in array  ;
8. <array_name>.unshift(): if we want to put array on the front;
9. <array_name>.pop(): used to pop element from last;
10. <array_name>.shift(): used to pop element from front;
11. <array_name>.splice(): use to remove and insert element at the same time.
12. <array_name>.slice(): return new array containing element in range.
13. <array_name>.some(function_name): return true or false if creteria followed.
14. <array_name>.reduce(function_name): reduce the array to a single value and executes a provided function for each value of the array
15. <array_name>.map(function_name): creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. This method iterates over an array and calls the function on every element of an array.

*/ 
let courses= ["this", "is", "one","of","the","example"];
console.log(courses.length);

let courses2= [2, 45,33,23,12332];
let courses3= courses.concat(courses2);
console.log(courses3);

courses3.push(234);
courses3.unshift("unshifting","unshiftingAgain");
console.log(courses3);
courses3.shift();
courses3.splice(1,2,true,false);
console.log("array after shifting,splice is: "+ courses3);

// function for some
function isThereAnyBoolean(element,index,value)
{
    return typeof(element)==Boolean;
}
let value= courses3.some(isThereAnyBoolean);
console.log(value);

// map function in javascript
function multiplyBy3(element)
{
    return element=element*2;
}
let course4= courses2.map(multiplyBy3);
console.log(course4);
