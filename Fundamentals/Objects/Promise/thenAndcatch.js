/*Promises can be consumed by registering functions using .then and .catch methods.
*/

let promise1 = new Promise(function(resolve,reject){
    resolve('Geek is great');
})

promise1.then(function (successMessage){
    console.log(successMessage);
},function (errorMessage){
    console.log(errorMessage);
});
/* in the above code, to revoke promise method, we have to use then, and pass two 
function for resolve and reject*/