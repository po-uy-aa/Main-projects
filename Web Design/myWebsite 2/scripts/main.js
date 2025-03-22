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
//              increment;
//              }

i = 10;
while(i > 0){
    content.innerHTML += "<p>The value of i is " + i + "</p>";
    i--;
}

// Do while loop
// Similar to the while loop, but differs in that the 
// condition is checked at the end of the loop. i.e.
// the loop will always execute at least once before the
// condition is checked.

content.innerHTML += "While Loop";
i = 10;
do{
    content.innerHTML += "<p>The value of i is " + i + "</p>"
    i++;
}while(i < 0)

//An array is a "list" of elements, here we will begin with
//one dimensional arrays (i.e. one column).  Arrays in
//JavaScript are zero based. i.e. the Index of the elements
//in the array begins at 0.
//Declare an array with 5 elements (days)
const days = ["Someday", "Monday", "Tuesday", "Wednesday", "Thursday"];

//Adding elements
days[5] = "Friday";

//Add an element to the end of the array
days.push("Saturday");

//Add an element to the beginning of the array
days.unshift("Sunday");

//Removing elements from the array
//Removes the element at index position 1
//and leaves it as an empty element "undefined"
//delete days[1]; 

//Remove the last element from the array
days.pop();

//Remove the first element from the array
days.shift();

//Add "Sunday" back to index position 0
days[0] = "Sunday";
//days.unshift("Sunday");
//Also add "Saturday" to the end of the array.
days.push("Saturday");

//Class task
//Write a loop to write the days to the .innerHTML property
//of the browser.
//Hint: we can determine the length (number of elements)
//of the array with .length. In this example .length will
// = 5
//Solution
for(i = 0; i < days.length; i++){
    content.innerHTML += "<p>The day at index " + i + " is " + days[i] + "</p>";
}

//Writing to the 'log' of the console
console.log(days);
days[7] = "Another Day";
console.log(days);
days.push("Not ANOTHER day!");
console.log(days);
days.pop();
console.log(days);
days.unshift("Sunday");
console.log(days);

let myMessage = "";
//Using a loop to write to the log
for(i = 0; i < days.length; i++){
    myMessage += "<p>The day at index " + i + " is " + days[i] + "</p>";
}

console.log(myMessage);

for(i = 0; i < days.length; i++){
    content.innerHTML += "<p>The day at index " + i + " is " + days[i] + "</p>";
}

//This syntax is similar (coneptually) to a 
// foreach loop that you may be familiar with in C#
for(let dayName of days){
    content.innerHTML += "<p>The day name is " + dayName + "</p>";
}

//Class Task
//Create an array of the days of the week with 'Sunday' being
//at index 0.  Get the current day using the .getDay()
// (which returns an int correlating to the day of the week.)
//function and display the day name using the index of the array (to the innerHTML).

const days2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayNumber = date.getDay();

content.innerHTML += "<p>Today is " + days2[dayNumber] + "!</p>"
