const express = require('express')
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const db = require("./config/db")

// configure dotenv for environment variable
dotenv.config({ path: "./config.env" });
const app = express()
const port = 3090

db()

// Body Parser
app.use(express.json());

// Mounting
app.use("/api/user", userRoutes);

 // Start our server
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})