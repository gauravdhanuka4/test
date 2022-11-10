const { readFile, writeFile } = require("fs");
let path = "./content/first.txt";
const util = require("util"); // to use promisify

// we cam use infact:
//const (readFile, writeFile) = require("fs").promises
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
const startUtil = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise(
      "./content/result-writeFilePromise-util.txt",
      `${first}  ${second}`,
      { flag: "a" }
    );
    console.log(first, " ", second);
  } catch (error) {
    console.log(error);
  }
};

startUtil();

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
//multiple callings of getText for first and second file
getText("./content/first.txt")
  .then((result1) => {
    console.log(result1);
    getText("./content/second.txt")
      .then((result2) => {
        console.log(result2);
        console.log(result1, result2, "testing something");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("This is the finally for 2nd getText");
      });
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("this is finally for the 1st getText");
  });
/*
const start = async () => {
  try {
    const first = await getText(path);
    const second = await getText("./content/second.txt");
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};
 
start(); */
/*
const promise = new Promise((resolve, reject) => {
  readFile(path, "utf8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("babaji");
  });
*/
