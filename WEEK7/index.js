const { response } = require("express");
const express = require("express")
const app = express();

const PORT = 2040


const FriendList = require("./models/FriendList");

app.get("/", (req, res, next) => {
    res.send("<h1>welcome</h1>")
})
    app.get("/FriendList/", (req, res, next) => {
        res.json(FriendList).status(201);

})

app.post("/FriendList/", (req, res, next) => {
    res.send()
    
})

app.listen(PORT, () => {
    console.log(`server started on port http://127.0.0.1:${PORT}`);
});