//GLOBALS - NO WINDOW !!!
// __dirname - path to current direcotry
// __filename = file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

/*
setInterval(() => {
  console.log("hello world");
}, 1000); */

const names = require("./names_module");
const sayHi = require("./func_module");
const data = require("./alternate_module");

//require("./mind_grenade"); This will just run the function in that module
//when we import an module we also invoke it

/*
console.log(data);
console.log(names);
sayHi("susan");
sayHi(names.john); */
