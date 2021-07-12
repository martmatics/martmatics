const { response } = require("express");
const express = require("express")
const app = express();
const path = require("path");


const PORT = 2022

// app.get("/", (request, response) => {
// response.send("<h1>welcome</h1>")
// const products = [
//     {
//         name = "tv",
//         price = "22"
//     };

//     {
//         name = "phone",
//         price = "25"
//     }
// ]

// sending file to the browser
app.get("/", (req, res) => {
res.sendFile(path.join(_dirname, "public", "index.html"));
});

app.get("*", (request, response) => {
    response.send("Page Not Found")
    
});
app.listen(PORT, () => {
    console.log(`server started on port http://127.0.0.1:${PORT}`);
});