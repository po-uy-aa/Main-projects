"use strict";

const button = document.getElementById("calculate");
const message = document.getElementById("message");

button.addEventListener("click", calculate);

/**
 * display all the grades the total and the average
 */
function calculate(){
    message.innerHTML = "";
    //read each grade into an array
    const gradeList = document.querySelectorAll("input");
    const grades = [];
    let total = 0;
    let average = 0;

    let numberOfGrades = 5;
    let index = 0;
    let grade;

    while(numberOfGrades > 0){
        grade = gradeList[index].value;
        message.innerHTML += "<p>" + grade + "</p>";
        grades.push(grade);
        total += Number.parseInt(gradeList[index].value);
        numberOfGrades = numberOfGrades - 1;
    }
    
    average = total / numberOfGrades;

    message.innerHTML += "The sum of your marks is: " + total + " and the average of your marks is: " + average;
}