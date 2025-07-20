# Sample Server - Cookies and XSS

This project contains a simple Express based web server
application and a matching front-end.  It is intended
as an example to illustrate basic server side programming,
and to allow exploration of cookies and cross-site scripting
(XSS) attacks.

The server implements two JSON end points: `/count` and `/likes`.

* GET `/count` - uses cookies to count visits to the site, returns 
  a JSON result `{count: N}`
* POST `/likes` - post body `{thing: "XXXX"}` adds "XXXX" to the list of likes
* GET `/likes` - get the current list of likes, returns a JSON list of strings

The server also serves files from the `public` folder using `express.static()`.
This is used to serve a simple front-end page that uses both of the
server endpoints.


## Installation

To install the required packages run:

```bash
npm install
```

## Running the Server

Run the server with:

```bash
npm start
```

This should start the server on <http://localhost:3123>.


## Workshop

* Modified `/count` endpoint to increment the counter by 2 for each visit instead of 1
* Updated the front-end script.js to be vulnerable to XSS attacks by using `unsafeHTML` to render likes
* Now user input in the "likes" form can include HTML and JavaScript code that will be executed when displayed

These modifications demonstrate:
1. How cookies can be used to track user visits
2. The difference between safe and unsafe HTML rendering
3. How XSS vulnerabilities can be exploited when user input is not properly sanitized

