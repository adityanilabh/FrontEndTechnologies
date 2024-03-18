/*
JavaScript slice() Method
JavaScript substring() Method
JavaScript substr() Method
JavaScript replace()
JavaScript replaceAll()
JavaScript toUpperCase()
JavaScript toLowerCase()
JavaScript concat() Method
JavaScript trim() Method
JavaScript trimStart() Method
JavaScript trimEnd() Method
JavaScript padStart() Method
JavaScript padEnd() Method
JavaScript charAt() Method
JavaScript charCodeAt() Method
JavaScript split() Method*/

// some are already covered in array, so just code some methods only.
// Define a string variable 'str'
let str = "Mind, Power, Soul";

// Use the substr() method to extract a substring f
let part = str.substr(6, 5);

// Output the value of variable
console.log(part);
console.log(str);


// using replace: 
// Define a string variable 'str' 
let str1 = "Mind, Power, Soul";

// Use the replace() method to replace the substring
let part1 = str.replace("Power", "Space");

// Output the resulting string after replacement
console.log(part1);



// replace all will replace all the occurance of string in that string:
// Define a string variable 'str'
let str3 = "Mind, Power, Power, Soul";

// Use the replaceAll() method to replace all occurrences
//of "Power" with "Space" in the string 'str'
let part3 = str.replaceAll("Power", "Space");

// Output the resulting string after replacement
console.log(part3);




// string trim method: 

let gfg = 'GFG    ';
let geeks = 'stands-for-GeeksforGeeks';

// Storing new object of string
// with removed white spaces
let newGfg = gfg.trim();

// Old length
console.log(gfg.length);

// New length
console.log(newGfg.length)


//using charAt();
console.log(newGfg.charAt(2));

