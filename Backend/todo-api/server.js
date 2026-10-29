const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("I am the about page");
  } else if (req.url === "/api") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Hi" }));
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello from my first Node server!");
  }
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
