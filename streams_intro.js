//streams
/* 4 different types of streams
1) writeable - to write continous streams 
2) readable - to read continous streams of data
3) duplex - to both read and write 
4) transform - data can be modified 

*streams extend eventEmitter class */

//streams for reading files
//usefull when we dont need to read complete files that are too big for variables

const { createReadStream } = require("fs");

//reading data in chunks 64kb chunks
//last buffer - remainder
//highWaterMark - control size
const stream = createReadStream("../content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result.length);
});

stream.on("error", (err) => {
  console.log(`${err}`);
});
