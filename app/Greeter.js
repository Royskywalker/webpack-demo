// Greeter.js
// var config =
//     import "./config.json";
module.exports = function() {
    var greet = document.createElement("div");
    greet.textContent = "config.greetText";
    // greet.textContent = config.greetText;
    return greet;
};