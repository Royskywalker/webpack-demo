// main.js
import Greeter from "./Greeter";
import "./main.css"; //导入css文件
var greeting = require("./Greeter.js");
document.getElementById("root").appendChild(greeting());