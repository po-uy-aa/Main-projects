"use strict";

const content = document.getElementById("content");
const button = document.getElementById("sequential");

button.addEventListener("click", sequentialSearch);

const binary = document.getElementById("binary");

binary.addEventListener("click", binarySearch);

//create array
const numbers = [57, 68, 42, 23, 1, 45, 39, 36, 9, 16, 20, 35, 48, 37, 7, 26,  30, 17, 41, 15, 43,34, 21, 6, 29, 25, 18, 33, 47, 4, 5, 14, 44, 40, 50, 46, 22, 3, 10, 56, 11];

display(numbers);

/**
 * displays the array seperated by a comma and a space 
 */
function display(numbers){
    let output = "";

    for(let i=0; i<numbers.length; i++){
        output += numbers[i] + ", ";
    }

    //remove last comma and space
    output = output.substring(0, output.length-2);

    content.innerHTML += "<p>" + output + "</p>";
}


/**
 * 
 * @param {int} num 
 * @returns true if found false if not found 
 */
function search(num){
    let found = false;
    
    return found;
}

/**
 * reads the number in the text box and calls the search function
 */
function sequentialSearch(){
    //read the number
    const num = document.getElementById("input").value;

    if(search(num) == true){
        content.innerHTML += "<p>number " + num + " is found</p>";
    }
    else{
        content.innerHTML += "<p>number " + num + " not found</p>";
    }
}

/**
 * reads the number sorts the array, displays the array sorted
 * calls the binary search function
 */
function binarySearch(){
    //complete later
}    