// var config = require("./config.json");
import config from './config.json'

function greet() {
    var divEle = document.createElement("div");
    // divEle.innerHTML = "hello,webpack";
    divEle.innerHTML = config.content;

    return divEle;
}
module.exports = greet;
