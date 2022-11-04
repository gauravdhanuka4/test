//npm i <packageName> for local install
//sudo npm install -g <packageName>cleq

const _ = require("lodash");

const iterms = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(iterms);
console.log(newItems);
