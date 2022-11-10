//npm i <packageName> for local install
//sudo npm install -g <packageName>cleq

//how to upload to git
/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/gauravdhanuka4/test.git
git push -u origin main
*/

const _ = require("lodash");

const iterms = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(iterms);
console.log(newItems);
console.log("hellp people");
