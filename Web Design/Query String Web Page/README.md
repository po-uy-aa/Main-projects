# COMP2110 Week 03

Briefly summarise the work you've done this week here.

## Inspect HTTP Requests

### HTTP Methods Used

- **GET**: The HTTP method used for all the requests shown in the Network tab is GET.

### Response Codes

- **200 OK**: This status code indicates that the request has succeeded.
- **304 Not Modified**: This status code indicates that the resource has not been modified since the last request.
- **404 Not Found**: This status code indicates that the requested resource could not be found on the server.

### Request and Response Headers

#### Request Headers

- **Host**: The domain name of the server (e.g., `127.0.0.1:5500`).
- **User-Agent**: Information about the browser and operating system making the request (e.g., `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36`).
- **Accept**: The MIME types that the client can handle (e.g., `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`).
- **Referer**: The URL of the page that referred the request (e.g., `http://127.0.0.1:5500/week03/index.html`).
- **Accept-Encoding**: The content-encoding methods the client can handle (e.g., `gzip, deflate, br`).
- **Connection**: The type of connection the client prefers (e.g., `keep-alive`).

#### Response Headers

- **Content-Type**: The MIME type of the resource (e.g., `text/html; charset=UTF-8`).
- **Content-Length**: The size of the response body in bytes (e.g., `296`).
- **Last-Modified**: The date and time the resource was last modified (e.g., `Mon, 10 Mar 2025 10:00:00 GMT`).
- **ETag**: A unique identifier for a specific version of the resource (e.g., `"5d8c72a5edda3"`).
- **Cache-Control**: Directives for caching mechanisms in both requests and responses (e.g., `max-age=0`).
- **Date**: The date and time at which the response was generated (e.g., `Mon, 10 Mar 2025 10:00:00 GMT`).

### Query String Parameters

- **name**: Pouya
- **theme**: dark

These headers and query string parameters provide essential information about the request and response, helping in debugging and optimizing web applications.

### How to Investigate Cache-Control Headers

1. **Open Developer Tools:** 
   - Right-click on your web page and select "Inspect" or press `Cmd+Option+I` on your keyboard to open the developer tools.
2. **Go to the Network Tab:** 
   - Click on the "Network" tab in the developer tools.
3. **Reload the Page:** 
   - Reload your web page to capture the network requests.
4. **Click on a File Request:** 
   - In the list of network requests, click on a file request (e.g., `index.html`, `style.css`, or `script.js`).
5. **Look at the Response Headers:** 
   - After clicking on a file request, a panel will open showing the details of the request.
   - Navigate to the "Headers" section and scroll down to the "Response Headers" subsection.

### Identifying and Interpreting Headers

#### Cache-Control

- **Header:** `Cache-Control: public, max-age=0`
- **Interpretation:** This directive indicates that the response can be cached by any cache (public), but it is considered stale immediately (max-age=0). This means the browser must revalidate the resource with the server before using a cached copy.

#### ETag

- **Header:** `ETag: W/"156-1957d1d5d2c"`
- **Interpretation:** The ETag is a unique identifier for the specific version of the resource. The `W/` prefix indicates that it is a weak ETag, which means it is a less strict comparison and can be used for caching purposes but not for byte-range requests.

#### Last-Modified

- **Header:** `Last-Modified: Sun, 09 Mar 2025 22:53:51 GMT`
- **Interpretation:** This header indicates the date and time at which the server believes the resource was last modified. The browser can use this information to determine if the resource has changed since it was last fetched.

### JavaScript Code

The JavaScript code in `script.js` handles URL query parameters and displays a welcome message if the `name` parameter is present.

```javascript
const params = new URLSearchParams(window.location.search);
console.log("Query Parameters:", Object.fromEntries(params.entries()));
if (params.get("name")) {
    document.body.innerHTML += `<h2>Welcome, ${params.get("name")}!</h2>`;
}
```

### Running the Server

To run the server, navigate to the `server` directory and install the dependencies:

```sh
cd server
npm install
```

Then, start the server:

```sh
node server.js
```

The server will be running on `http://localhost:3000`.

