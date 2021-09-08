const boys = require("./data/boys.json");
const girls = require("./data/girls.json");
console.log();

const boyNames = [];
const girlNames = [];

function loadJsonData() {
  Object.keys(boys).forEach((name) => {
    //console.log(name, ":", boys[name].source);
    boyNames.push(name);
  });
  Object.keys(girls).forEach((name) => {
    //console.log(name, ":", boys[name].source);
    girlNames.push(name);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * boyNames.length);
}

function generateUsername(count) {
  for (let i = 0; i < count; i++) {
    let rand = getRandomNumber();
    console.log(boyNames[rand]);
  }
}

loadJsonData();
generateUsername(10);
module.exports = generateUsername;
