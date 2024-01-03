// JavaScript code
// Step 1:
/* Using button to change the value in file fundamentals.html */
function thisfun() {
    document.getElementById("h1Change").innerHTML = "Hello There! How Are You";
}

/* These below two functions will decrease and increase the value by one */

function incrementByOne() {
    let value = parseInt(document.getElementById("p1Change").innerHTML);
    document.getElementById("p1Change").innerHTML = (value + 1).toString();
}

function decreaseByOne() {
    let value = parseInt(document.getElementById("p1Change").innerHTML);
    document.getElementById("p1Change").innerHTML = (value - 1).toString();
}
