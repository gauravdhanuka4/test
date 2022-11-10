const http = require("http");

//Uisng event Emitter API
const server = http.createServer();

//emits request event
//subscribe to it/listen for it/repsond to it
server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(8000);
