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

/*const eventForMouse= document.getElementById("mouseHoverId");

eventForMouse.addEventListener('click',function(event){
      eventForMouse.style.backgroundColor= 'lightgreen';
      eventForMouse.style.width= '300px';
});
*/
window.onload = function() {
    const eventForMouse = document.getElementById("mouseHoverId");
  
    if (eventForMouse) {
      eventForMouse.addEventListener('click', function(event) {
        eventForMouse.style.backgroundColor = 'lightgreen';
        eventForMouse.style.width = '300px';
      });

      eventForMouse.addEventListener('mouseout', function(event) {
        eventForMouse.style.backgroundColor = '#eee'; // Restore original background color
        eventForMouse.style.width = '200px'; // Restore original width
      });
    } else {
      console.error("Element with ID 'mouseHoverId' not found.");
    }
  };
  
