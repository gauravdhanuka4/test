const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
  }
  res.end(`<h1>Oops not found</h1>
  <p>We cant seem to find the page you are looking for</p>
  <a href = "/">back home</a>`);
});

server.listen(8888);
