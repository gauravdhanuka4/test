const path = require("path");

//os specific path seperator
console.log(path.sep);

const filepath = path.join("/content", "subfolder", "text.txt");
console.log(filepath);

//base name at the end of filepath i.e the file at the end of file path
console.log(path.basename(filepath));

//absoulte path
console.log(path.resolve(__dirname, "content", "subfolder", "test.txt"));
