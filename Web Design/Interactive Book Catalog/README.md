# COMP2110 Week 5

At first, I explored the Open Library Book API. I accessed two URLs:
- `https://openlibrary.org/works/OL45804W` which returns an HTML page.
- `https://openlibrary.org/works/OL45804W.json` which returns a JSON document.

I used developer tools to inspect the HTTP requests and responses. 
The HTML URL resulted in a 301 redirect to `https://openlibrary.org/works/OL45804W/The_Great_Gatsby`, 
while the JSON URL directly returned the data. The Content-Type for the HTML response was `text/html; charset=utf-8`, 
and for the JSON response, it was `application/json`.

I compared the information in both responses and found that the JSON contains the same core information as the HTML page 
but lacks the presentation details. I also used a browser extension to view the JSON data in a well-formatted manner.

## Task for this week

The first steps I have done for the task this week are:

1. **Write the function `renderBooks`**:
    - This function takes the array of book objects and renders them in the page as a simple list with the title and author of each book.
    - The function should find the `content` div within the page and insert the book list into that.

2. **Write the function `detailedView`**:
    - This function displays more information about each book, including the image referenced in the `imageLink` property.
    - Modify the `window.onload` handler to call this function instead of `renderBooks`.

3. **Implement the `onclick` handler for the button**:
    - This handler switches between the two views.
    - Use a global variable to record which view is current so that your function can switch to the other one.

4. **Write a stylesheet `style.css`**:
    - This stylesheet displays the detailed list of books as a grid rather than a list.


## Additional Features

1. **Search Form**:
   - A search form that lets you search book titles or authors.
   - A 'submit' handler for the form that updates the display with the filtered list of books matching the search term.

2. **Event Handlers**:
   - Clicking on the title of a book in the book list view shows the book image somewhere on the page.
   - Clicking on a book title in the short list shows the full details of that book on the same page.
