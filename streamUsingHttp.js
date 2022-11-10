const http = require("http");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");

http
  .createServer((req, res) => {
    //const text = fs.readFileSync("./content/big.txt","utf8");
    //res.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", (result) => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => res.end(err));
  })
  .listen(8000);
