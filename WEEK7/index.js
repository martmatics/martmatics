const express = require("express")
const app = express();
const fs = require("fs")
const PORT = 2040

app.use(express.json())

const FriendList = require("./models/FriendList");

// app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const { name } = req.query;
    // res.render("index", { name });
})

// app.post("/FriendList/", (req, res) => {
//     res.render("FriendList", { FriendList: FriendList});
        
    // })
// app.get("/", (req, res, next) => {
//     res.send("<h1>welcome</h1>")
// })
//     app.get("/FriendList/", (req, res, next) => {
//         res.json(FriendList).status(201);

// })

// app.post("/FriendList/", (req, res, next) => {
//     FriendList.push(req.body);
//     res.json(FriendList);
    
// })

app.listen(PORT, () => {
    console.log(`server started on port http://127.0.0.1:${PORT}`);
});