const { response } = require("express");
const express = require("express")
const app = express();
const moment = require("momment")
const PORT = 4040
const user = require("./module/user")

function sayHello(req, res, next){
    console.log("hello world");
    res.send("hello world");
    next();
    return;
}

// App-level middleware
app.user(sayHello);
app.get("/",)