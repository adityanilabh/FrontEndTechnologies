/*
JavaScript Promise are easy to manage when dealing with multiple asynchronous operations 
where callbacks can create callback hell leading to unmanageable code. Prior to promises
 events and callback functions were used but they had limited functionalities and 
 created unmanageable code. Multiple callback functions would create callback hell that 
 leads to unmanageable code. Promises are used to handle asynchronous operations in 
 JavaScript
*/

/* promise states:
1. fuifilled
2. rejected
3. pending
4. settled(optional here)
*/

let promise = new Promise(function (resolve, reject) {
	const x = "geeksforgeeks";
	const y = "geeksforgeeks"
	if (x === y) {
		resolve();
	} else {
		reject();
	}
});

promise.
	then(function () {
		console.log('Success, You are a GEEK');
	}).
	catch(function () {
		console.log('Some error has occurred');
	});
