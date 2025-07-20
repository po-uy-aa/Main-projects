"use strict";

//get the current day of the week
const date = new Date();
//const day = date.getDay();
const cMonth = date.getMonth();

//In the above code, I've created an instance of a 'Date'
//object, and in the next line I'm using the object's 
// .getDay() method to return today's weekday name
//and assigning that to 'day' variable.
//.getDay() returns number, so Sunday = 0, Monday = 1, etc.

//get the element from the page that we want to write to
const content = document.getElementById("content");

/* //Use an 'if' to determine the day of the week
if(day === 1){
    content.innerHTML = "<p>Awesome! We have Peter today! Our favourite teacher! For client side scripting!</p>";
}
else if (day === 4){
    content.innerHTML = "<p>It's Thursday! Database tonight!</p>";
}
else{
    content.innerHTML = "<p>No client side today.</p>";
} */
let day = 8;
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Not a day";
        break;
}

content.innerHTML += "<p>Today is " + dayName + "</p>";

//Write a switch block to return to the browser the number
//of days in the month.
/* 
Months with 31 days:
January
March
May
July
August
October
December

Months with 30 days:
April
June
September
November

Month with 28 or 29 days (leap year):
February */
let month = "January";
let message;

switch (cMonth) {
    case 1: //February
        message = cMonth + " has 28 days or in a leap year 29.";
        break;
    case 3: //April
    case 5: //June
    case 8: //September
    case 10: //November
        message = cMonth + " has 30 days.";
        break;
    case 0: //January
    case 2: //March
    case 4: //May
    case 6: //July
    case 7: //August
    case 9: //October
    case 11: //December
        message = cMonth + " has 31 days. ";
        break;
    default:
        message = cMonth + " is NOT a month!";    
        break;
}

content.innerHTML += "<p>" + message + "</p>";

//Ternary Operator
//Sometimes referred to as an "immidate if" or an "inline if"
let age = 15;

let canDrive = age > 16 ?  "Yes" : "No"

content.innerHTML += "<p>" + canDrive + " to being allowed to drive!</p>"; 

//Loops
// - For loop - used to iterate a known number of iterations.
// - While loop - used to iterate for as long as a condition is true.
// i.e. while the condition is true.
// - Do while loop - used to iterate at least once before the while 
// condition is checked, and continue iterating there after if the
// contition remains true.

// for loop
// Syntax   for(initialisation; condition; increment)
let i; //Our sentinal variable (counter variable)

for(i=1; i <= 10; i++){
    content.innerHTML += "<p>This is the " + i + " for loop iteration.</p>"; 
}

// while loop
// Syntax   while(condition){
//              do something;
//              }

i = 10;
while(i > 0){
    content.innerHTML += "<p>The value of i is " + i + "</p>";
    i--;
}