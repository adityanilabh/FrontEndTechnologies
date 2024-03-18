/* 
What is JSON?
-- JSON stands for Javascript Object Notification.
What is it used for?
Like XML, it is one of the ways of formatting the data. Such a format of data is 
used by web applications to communicate with each other.

Why JSON? 
The fact that whenever we declare a variable and assign a value to it, it’s not the 
variable that holds the value but rather the variable just holds an address in the 
memory where the initialized value is stored

Characteristics of JSON
It is Human-readable and writable.
It is a lightweight text-based data interchange format which means, 
it is simpler to read and write when compared to XML.
It is widely used as a data storage and communication format on the web.
Though it is derived from a subset of JavaScript, it is Language-independent. 
Thus, the code for generating and parsing JSON data can be written in any other 
programming language.
*/


//Convert a JSON Text to a JavaScript Object

let text = '{"model":[' +
	'{"carName":"Baleno","brandName":"Maruti" },' +
	'{"carName":"Aura","brandName":"Hyndai" },' +
	'{"carName":"Nexon","brandName":"Tata" }]}';

const cars = JSON.parse(text);
console.log("The car name is: " + cars.model[2].carName + 
	" of brand: " + cars.model[2].brandName);
