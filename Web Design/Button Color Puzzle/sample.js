// Function to change the color of a given button
function changeColor(id, color) {
    const button = document.getElementById(id);
    button.style.backgroundColor = color;
}

// Onclick handlers for the buttons
document.getElementById('button1').onclick = function() {
    changeColor('button2', 'red');
    changeColor('button4', 'red');
};

document.getElementById('button2').onclick = function() {
    changeColor('button1', 'yellow');
    changeColor('button4', 'yellow');
};

document.getElementById('button3').onclick = function() {
    changeColor('button2', 'yellow');
    changeColor('button3', 'yellow');
};

document.getElementById('button4').onclick = function() {
    changeColor('button1', 'red');
    changeColor('button3', 'red');
};