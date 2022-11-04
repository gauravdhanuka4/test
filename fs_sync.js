const { readFileSync, writeFileSync } = require("fs"); //destructuring
const fs = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);
/*
let i = 0;
for (i = 0; i < 10000000000; i++) {
  continue;
} */
writeFileSync(
  "./content/result_sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("dont with this task");
console.log("starting with the next ine");
