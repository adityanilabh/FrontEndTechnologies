//JavaScript Date object is used to represent a moment in time. This time value is since 1 January 1970 UTC (Coordinated Universal Time).
// If nothing as parameter is given, 
// it represent the present date and time.
let A = new Date();

// Printing present date and time.
console.log(A+5); // will show IST

// When some numbers are taken as the parameter 
// then they are considered as year, month, day, 
// hours, minutes, seconds, milliseconds 
// respectively.
let B = new Date(1996, 10, 13, 5, 30, 22);

console.log(B);

