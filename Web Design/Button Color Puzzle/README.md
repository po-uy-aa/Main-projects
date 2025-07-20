# COMP2110 Week 4

 I explored modifying the content of a page in the web browser using JavaScript and the Document Object Model (DOM). Here are the steps we followed:

1. **Inspecting Elements**: I used the developer tools to inspect elements on a news website and identified the HTML tags and class attributes of the headlines.

2. **Using the Console**: I switched to the Console tab in developer tools to run JavaScript code in the context of the current page.

3. **Selecting Elements**: I wrote JavaScript code to select all headline elements and modified their content. For example:

```javascript
    headlines = document.getElementsByTagName("h3");
    headlines[0].innerHTML = "COMP2110 Found to be Best Unit in the Universe!";
 ```

1. **Looping Through Elements**: I wrote a for loop to change the content of all headlines to a chosen message.

2. **Creating a Function**: I created a function that takes a new message as an argument and modifies the headlines when called.

3. **Targeting Other Elements**: I also targeted other elements, such as image captions, by looking at the class names on the elements containing the text.

Additionally,this week, I focused on the second task which is creating a simple web game using HTML, CSS, and JavaScript. The main tasks included:

1. **HTML Structure**: I download the basic structure of the web page, including a title, a heading, a paragraph, and a list of buttons.

2. **CSS Styling**: I used CSS Grid to layout the buttons in a 2x2 grid. I also styled the page to have a purple background, centered text, and styled buttons that change color when hovered over.
3. **JavaScript Functionality**: I also added JavaScript to handle button clicks and change the color of the squares to red or yellow according to the following rules:
    - Button 1: Buttons 2 and 4 turn red.
    - Button 2: Buttons 1 and 4 turn yellow.
    - Button 3: Buttons 2 and 3 turn yellow.
    - Button 4: Buttons 1 and 3 turn red.

Overall, this exercise helped us understand the basics of web development, including structuring HTML, styling with CSS, and adding interactivity with JavaScript, as well as manipulating the DOM to modify web page content dynamically.