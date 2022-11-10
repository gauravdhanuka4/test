//event looping
//It allowes single threaded node js to perform non-blocking I/O operations

//asynchronous example for event looping
const { readFile } = require("fs");

console.log("started first task");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});

console.log("starting new task");
