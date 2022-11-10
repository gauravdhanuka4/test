//const { reject } = require("lodash");

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says Hi");
    } else {
      reject("We only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing Response");
    resolve(`Extra Information  + ${response}`);
  });
}

makeRequest("Google").then((response) => {
  console.log("Response Recieved");
  processRequest(response).then((response) => {
    console.log(response);
  });
});
