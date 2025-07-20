const params = new URLSearchParams(window.location.search);
console.log("Query Parameters:", Object.fromEntries(params.entries()));
if (params.get("name")) {
    document.body.innerHTML += `<h2>Welcome, ${params.get("name")}!</h2>`;
}