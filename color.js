// the event listener that checks if the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    var theBox = document.getElementById("color-box");
    var theButton = document.getElementById("change-color-btn");

    function getRandomColor() {
        // Generate a random number between 0 and 0xFFFFFF (16777215 in decimal)
        // Then convert that number to a hexadecimal string
        var randomColor = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        
        // Pad the string with leading zeros to ensure it's always 6 characters long
        return "#" + randomColor.padStart(6, '0');
    }
     
    // setting onclick color changing function
    theButton.onclick = function () {
        theBox.style.backgroundColor = getRandomColor();
    }
    
});