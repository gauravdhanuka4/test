const EventEmitter = require("events");

const customEmitter = new EventEmitter();
//on function - listen for the event
//emit function - emit an event
//how many .on can be there
//order matters first listen then emit it
customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} with id :${id} `);
});
customEmitter.on("response", () => {
  console.log(`some other logic here `);
});

customEmitter.emit("response", "john", 34);
